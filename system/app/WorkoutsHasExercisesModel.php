<?php namespace App;

use Illuminate\Http\Request;
use App\Model as BaseModel;

class WorkoutsHasExercisesModel extends BaseModel
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function showAll()
    {
        return $this->getAll('workouts_has_exercise');
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
            'exercise_id',
            'count_id',
            'exercise_weight',
            'day_id'
        );

        return $this->setInsert(
            $required,
            'workouts_has_exercise',
            $request,
            ''
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
            'exercise_id',
            'count_id',
            'exercise_weight',
            'day_id'
        );

        return $this->getId(
            'workouts_has_exercise',
            $array,
            'workout_id',
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
            'workouts_has_exercise',
            'workout_id',
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
            'workouts_has_exercise',
            'workout_id',
            $id
        );
    }
}
