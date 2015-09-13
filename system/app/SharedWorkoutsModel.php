<?php namespace App;

use Illuminate\Http\Request;
use App\Model as BaseModel;

class SharedWorkoutsModel extends BaseModel
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function showAll()
    {
        return $this->getAll('shared_workouts');
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
            'workout_id',
            'share_id'
        );

        return $this->setInsert(
            $required,
            'shared_workouts',
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
            'workout_id',
            'synced'
        );

        return $this->getId('shared_workouts', $array, 'share_id', $id);
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
            'shared_workouts',
            'share_id',
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
            'shared_workouts',
            'share_id',
            $id
        );
    }
}
