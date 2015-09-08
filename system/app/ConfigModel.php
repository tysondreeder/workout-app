<?php namespace App;

use Illuminate\Http\Request;
use App\Model as BaseModel;

class ConfigModel extends BaseModel
{
    /**
     * Display a listing of the resource.
     *
     * @return mixed
     */
    public function showAll()
    {
        return $this->getAll('config');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     *
     * @return mixed
     */
    public function postInsert($request)
    {
        $required = array(
            'user_id',
            'weight_type',
            'language',
            'start_of_week'
        );

        return $this->setInsert(
            $required,
            '',
            'config',
            $request
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     *
     * @return mixed
     */
    public function showId($id)
    {
        $array = array(
            'weight_type',
            'language',
            'start_of_week'
        );

        return $this->getId(
            'config',
            $array,
            'config_id',
            $id
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     *
     * @return mixed
     */
    public function putUpdate($request, $id)
    {
        return $this->setUpdate(
            '',
            'config',
            'config_id',
            $request,
            $id
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     *
     * @return mixed
     */
    public function doDelete($id)
    {
        return $this->setDelete(
            'config',
            'config_id',
            $id
        );
    }
}
