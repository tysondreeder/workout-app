<?php namespace App;

use Illuminate\Http\Request;
use App\Model as BaseModel;


class CountsModel extends BaseModel
{
    /**
     * Display a listing of the resource.
     *
     * @return mixed
     */
    public function showAll()
    {
        return $this->getAll('counts');
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
            'count'
        );

        return $this->setInsert(
            $required,
            'counts',
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
            'count'
        );

        return $this->getId(
            'counts',
            $array,
            'count_id',
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
            'counts',
            'count_id',
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
            'counts',
            'count_id',
            $id
        );
    }
}
