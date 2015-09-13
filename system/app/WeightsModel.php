<?php namespace App;

use Illuminate\Http\Request;
use App\Model as BaseModel;

class WeightsModel extends BaseModel
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function showAll()
    {
        return $this->getAll('weights');
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
            'lb',
            'kg'
        );

        return $this->setInsert(
            $required,
            '',
            'weights',
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
        $array = array(
            'lb',
            'kg'
        );

        return $this->getId(
            'weights',
            $array,
            'weight_id',
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
            '',
            'weights',
            'weight_id',
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
            'weights',
            'weight_id',
            $id
        );
    }
}
