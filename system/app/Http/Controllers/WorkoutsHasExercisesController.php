<?php namespace App\Http\Controllers;

use App\WorkoutsHasExercisesModel;

use Illuminate\Routing\Controller as BaseController;
use App\Http\Requests;
use Illuminate\Http\Request;

class WorkoutsHasExercisesController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return mixed
     */
    public function index()
    {
        return (new WorkoutsHasExercisesModel)->showAll();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     *
     * @return mixed
     */
    public function store(Request $request)
    {
        return (new WorkoutsHasExercisesModel)->postInsert($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int    $w_id
     * @param  mixed  $e_id
     *
     * @return mixed
     */
    public function show($w_id, $e_id = '')
    {
        $ids['workout_id'] = $w_id;
        if(empty($e_id) === false) {
            $ids['exercise_id'] = $e_id;
        }

        return (new WorkoutsHasExercisesModel)->showID($ids);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int    $w_id
     * @param  mixed  $e_id
     *
     * @return mixed
     */
    public function update(Request $request, $w_id, $e_id = '')
    {
        $ids['workout_id'] = $w_id;
        if(empty($e_id) === false) {
            $ids['exercise_id'] = $e_id;
        }

        return (new WorkoutsHasExercisesModel)->putUpdate($request, $ids);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     *
     * @return mixed
     */
    public function destroy($id)
    {
        return (new WorkoutsHasExercisesModel)->doDelete($id);
    }
}
