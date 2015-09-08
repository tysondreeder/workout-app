<?php namespace App;

use Illuminate\Http\Request;
use App\Model as BaseModel;


class ConnectionsModel extends BaseModel
{
    /**
     * Display a listing of the resource.
     *
     * @return mixed
     */
    public function showAll()
    {
        return $this->getAll('connections');
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
            'connection_id'
        );

        return $this->setInsert(
            $required,
            '',
            'connections',
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
            'user_id',
            'connection_id'
        );

        return $this->getId('connections', $array, 'share_id', $id);
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
            'connections',
            'share_id',
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
            'connections',
            'share_id',
            $id
        );
    }
}
