<?php namespace App\Http\Controllers;

use App\ExercisesModel;

use Illuminate\Routing\Controller as BaseController;
use App\Http\Requests;
use Illuminate\Http\Request;

class ExercisesController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return mixed
     */
    public function index()
    {
        return (new ExercisesModel)->showAll();
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
        return (new ExercisesModel)->postInsert($request);
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
        $ids['exercise_id'] = $id;
        return (new ExercisesModel)->showID($ids);
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
        return (new ExercisesModel)->putUpdate($request, $id);
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
        return (new ExercisesModel)->doDelete($id);
    }
}
