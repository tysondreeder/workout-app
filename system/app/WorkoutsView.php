<?php namespace App;

use App\View as BaseView;

class WorkoutsView extends BaseView
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function showAll()
    {
        return $this->getAll('workouts_v');
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
            'workout_name',
            'workout_days',
            'day_name',
            'count',
            'exercise_name',
            'exercise_weight'
        );

        return $this->getId(
            'workouts_v',
            $array,
            'workout_id',
            $id
        );
    }
}
