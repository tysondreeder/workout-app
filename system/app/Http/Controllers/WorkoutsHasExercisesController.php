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
     * @param  int  $id
     *
     * @return mixed
     */
    public function show($id)
    {
        return (new WorkoutsHasExercisesModel)->showID($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     *
     * @return mixed
     */
    public function update(Request $request, $id)
    {
        return (new WorkoutsHasExercisesModel)->putUpdate($request, $id);
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
