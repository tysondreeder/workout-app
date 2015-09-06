<?php namespace App;

use Illuminate\Database\Eloquent\Model as BaseModel;
use Illuminate\Http\Response;
use DB;

/**
 * Class Model
 *
 * @package App
 */
abstract class Model extends BaseModel
{
    /**
     * @var array
     */
    protected $errors = array();

    /**
     * Access all the records. Use the protected method getAll().
     *
     * @return mixed
     */
    abstract public function showAll();

    /**
     * Insert a record. Use setInsert();
     *
     * @param $request
     *
     * @return mixed
     */
    abstract public function postInsert($request);

    /**
     * Show a single record. Use getId();
     *
     * @param $id
     *
     * @return mixed
     */
    abstract public function showID($id);

    /**
     * Update a record. Use setUpdate().
     *
     * @param $request
     * @param $id
     *
     * @return mixed
     */
    abstract public function putUpdate($request, $id);

    /**
     * Delete a record. Use setDelete()
     *
     * @param $id
     *
     * @return mixed
     */
    abstract public function doDelete($id);

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
            $data->response = DB::table($table)
                ->get();

            $data->code = 200;

            if(empty($data->response) === true) {
                throw new \Exception(sprintf('There was no response from the %s table', $table), 400);
            }

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

            $data->response = DB::table($table)
                ->select($selectArray)
                ->where($where, $id)
                ->get();

            $data->code = 200;

            if(empty($data->response) === true) {
                throw new \Exception(sprintf('There was no response from the %s table', $table), 400);
            }

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
    protected function setInsert($required, $prefix, $table, $request)
    {
        $data = new \stdClass;

        if(empty($prefix) === false) {
            $data->inputs = array_map($this->setPrefix, $request->input(), $prefix);
        } else {
            $data->inputs = $request->input();
        }

        try {
            $this->validate($required, $data->inputs);

            if(empty($this->errors) === false) {
                throw new \Exception(sprintf('The following fields are incomplete: %s', implode(', ', $this->errors)), 421);
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
    protected function setUpdate($prefix, $table, $where, $request, $id)
    {
        $inputs = $request->input();
        $data = new \stdClass();

        foreach ($inputs as $name => $input) {
            if(empty($prefix) === false) {
                $name = sprintf($prefix . '%s', $name);
            }
            $data->$name = $input;
        }

        try{
            $return = DB::table($table)
                ->where($where, $id)
                ->update(get_object_vars($data));

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
}
