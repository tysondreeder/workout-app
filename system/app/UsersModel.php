<?php namespace App;

use Illuminate\Http\Request;
use App\Model as BaseModel;

class UsersModel extends BaseModel
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function showAll()
    {
        return $this->getAll('users');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function postInsert($request)
    {
        $required = array(
            'user_email',
            'user_name',
            'user_password'
        );

        return $this->setInsert(
            $required,
            'user_',
            'users',
            $request
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function showId($id)
    {
        //
        $array = array(
            'user_name',
            'user_height',
            'user_weight',
            'user_bmi'
        );

        return $this->getId(
            'users',
            $array,
            'user_id',
            $id
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function putUpdate($request, $id)
    {
        return $this->setUpdate(
            'user_',
            'users',
            'user_id',
            $request,
            $id
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function doDelete($id)
    {
        return $this->setDelete(
            'users',
            'user_id',
            $id
        );
    }
}
