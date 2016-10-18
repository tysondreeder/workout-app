<?php namespace App;

use Illuminate\Http\Request;
use App\Model as BaseModel;

class ExercisesModel extends BaseModel
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function showAll()
    {
        return $this->getAll('exercises');
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
            'exercise_name',
            'exercise_example'
        );

        return $this->setInsert(
            $required,
            'exercises',
            $request,
            'exercise_'
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
            'exercise_name',
            'exercise_example'
        );

        return $this->getId(
            'exercises',
            $array,
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
            'exercises',
            'exercise_id',
            $request,
            $id,
            'exercise_'
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
            'exercises',
            'exercise_id',
            $id
        );
    }
}
