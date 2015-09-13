<?php namespace App\Http\Controllers;

use App\WorkoutsView;

use Illuminate\Routing\Controller as BaseController;

class WorkoutsViewController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return mixed
     */
    public function index()
    {
        return (new WorkoutsView)->showAll();
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
        return (new WorkoutsView)->showID($id);
    }
}