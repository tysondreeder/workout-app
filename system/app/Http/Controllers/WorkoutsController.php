<?php namespace App\Http\Controllers;

use App\WorkoutsModel;

use Illuminate\Routing\Controller as BaseController;
use App\Http\Requests;
use Illuminate\Http\Request;

class WorkoutsController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return mixed
     */
    public function index()
    {
        return (new WorkoutsModel)->showAll();
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
        return (new WorkoutsModel)->postInsert($request);
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
        return (new WorkoutsModel)->showID($id);
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
        return (new WorkoutsModel)->putUpdate($request, $id);
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
        return (new WorkoutsModel)->doDelete($id);
    }
}
