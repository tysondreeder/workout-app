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
     * @param  int  $ids
     * @return Response
     */
    public function showId($ids)
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
            $ids
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $ids
     * @return Response
     */
    public function putUpdate($request, $ids)
    {
        return $this->setUpdate(
            'workouts_has_exercise',
            $ids,
            $request
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
