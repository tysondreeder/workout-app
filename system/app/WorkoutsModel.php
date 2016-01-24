<?php namespace App;

use Illuminate\Http\Request;
use App\Model as BaseModel;

class WorkoutsModel extends BaseModel
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function showAll()
    {
        return $this->getAll('workouts');
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
            'user_id',
            'workout_name',
            'workout_days'
        );

        return $this->setInsert(
            $required,
            'workouts',
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
            'user_id',
            'workout_name',
            'workout_days'
        );

        return $this->getId(
            'workouts',
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
            'workouts',
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
            'workouts',
            'workout_id',
            $id
        );
    }
}
