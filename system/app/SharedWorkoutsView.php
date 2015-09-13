<?php namespace App;

use App\View as BaseView;

class SharedWorkoutsView extends BaseView
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function showAll()
    {
        return $this->getAll(
            'shared_workouts_v'
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
            'user_id',
            'workout_id',
            'synced'
        );

        return $this->getId(
            'shared_workouts_v',
            $array,
            'connection_id',
            $id
        );
    }
}
