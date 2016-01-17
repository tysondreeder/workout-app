<?php namespace App;

use Illuminate\Database\Eloquent\Model as BaseModel;
use Illuminate\Http\Response;
use DB;

/**
 * Class Model
 *
 * @package App
 */
class Actions extends BaseModel
{
    /**
     * @var array
     */
    protected $errors = array();

    /**
     * Display all the items from a data table
     *
     * @param  $table
     *
     * @return mixed
     */
    protected function getAll($table)
    {
        $data = new \stdClass;

        try {
            $response = DB::table($table)
                ->get();

            $reformattedResponse = array();
            foreach($response as $k => $v) {
                $reformattedResponse[] = $this->jsonMap(get_object_vars($v));
            }

            if(empty($response) === true) {
                throw new \Exception(sprintf('There was no response from the %s table', $table), 400);
            }

            $data->response = $reformattedResponse;
            $data->code = 200;


        } catch (\Exception $e) {
            $data->message = $e->getMessage();
            $data->code = $e->getCode();
        }

        return $this->setResponse($data);
    }

    /**
     * Get a single record from the DB table
     *
     * @param  $table
     * @param  $selectArray
     * @param  $where
     * @param  $id
     *
     * @return mixed
     */
    protected function getId($table, $selectArray, $where, $id)
    {
        $data = new \stdClass;

        try {
            if(is_array($selectArray) === false) {
                throw new \Exception('Column set needs to be in array format.', 400);
            }

            $response = DB::table($table)
                ->select($selectArray)
                ->where($where, $id)
                ->get();

            if(empty($response) === true) {
                throw new \Exception(sprintf('There was no response from the %s table', $table), 404);
            }

            $reformattedResponse = $this->jsonMap(get_object_vars($response[0]));

            $data->response = $reformattedResponse;
            $data->code = 200;

        } catch (\Exception $e) {
            $data->message = $e->getMessage();
            $data->code = $e->getCode();
        }

        return $this->setResponse($data);

    }

    /**
     * Insert the data into the DB table
     *
     * @param  $required
     * @param  $prefix
     * @param  $table
     * @param  $request
     *
     * @return mixed
     */
    protected function setInsert($required, $table, $request, $prefix = '')
    {
        $data = new \stdClass;
        if(empty($prefix) === false) {
            $data->inputs = $this->setPrefix($request->input(), $prefix);
        } else {
            $data->inputs = $request->input();
        }

        try {
            $this->validate($required, $data->inputs);

            if(empty($this->errors) === false) {
                throw new \Exception(sprintf('The following fields are incomplete: %s', implode(', ', $this->errors)), 400);
            }

            $return = DB::table($table)
                ->insert($data->inputs);

            if($return === false) {
                throw new \Exception(sprintf("Data insert failed into the %s table", $table), 400);
            }

            $data->code = 200;

        } catch (\Exception $e) {
            $data->message = $e->getMessage();
            $data->code = $e->getCode();
        }

        return $this->setResponse($data);
    }

    /**
     * Update a record from the DB table
     *
     * @param  $prefix
     * @param  $table
     * @param  $where
     * @param  $request
     * @param  $id
     *
     * @return mixed
     */
    protected function setUpdate($table, $where, $request, $id, $prefix = '')
    {
        $data = new \stdClass();
        if(empty($prefix) === false) {
            $data->inputs = $this->setPrefix($request->input(), $prefix);
        } else {
            $data->inputs = $request->input();
        }

        try{
            $return = DB::table($table)
                ->where($where, $id)
                ->update($data->inputs);

            if($return === false) {
                throw new \Exception(sprintf("Data update failed on id %s in %s table", $id, $table), 400);
            }

            $data->code = 200;

        } catch (\Exception $e) {
            $data->message = $e->getMessage();
            $data->code = $e->getCode();
        }

        return $this->setResponse($data);
    }

    /**
     * Delete a record from a DB table
     *
     * @param  $table
     * @param  $where
     * @param  $id
     *
     * @return mixed
     */
    protected function setDelete($table, $where, $id)
    {
        $data = new \stdClass;
        $data->id = $id;

        try {
            $return = DB::table($table)
                ->where($where, $id)
                ->delete();

            if($return === false) {
                throw new \Exception(sprintf("Data delete failed on id %s in %s table", $id, $table), 400);
            }

            $data->code = 200;

        } catch (\Exception $e) {
            $data->message = $e->getMessage();
            $data->code = $e->getCode();
        }

        return $this->setResponse($data);
    }

    /**
     * Return the response in a json object
     *
     * @param  $data
     *
     * @return mixed
     */
    protected function setResponse($data)
    {
        return (new Response(get_object_vars($data), $data->code))->header('Content-Type', 'application/json');
    }

    /**
     * Validate the required fields for the DB table
     *
     * @param $required
     * @param $inputs
     *
     * @return void
     */
    protected function validate($required, $inputs)
    {
        foreach($required as $v) {
            if(array_key_exists($v, $inputs) === false) {
                $this->errors[] = $v;
            }
        }
    }

    /**
     * @param $inputs
     * @param $prefix
     * @return array
     */
    protected function setPrefix($inputs, $prefix)
    {
        $data = [];
        foreach ($inputs as $name => $input) {
            $name = sprintf($prefix . '%s', $name);
            $data[$name] = $input;
        }
        return $data;
    }

    protected function jsonMap($array)
    {
        $response = array();
        foreach($array as $k => $v) {
            $response[$k] = (is_object($decoded = json_decode($v)) === true) ? $decoded : $v;
        }

        return $response;
    }
}
