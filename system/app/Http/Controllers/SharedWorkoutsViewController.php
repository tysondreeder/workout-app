<?php namespace App\Http\Controllers;

use App\SharedWorkoutsView;

use Illuminate\Routing\Controller as BaseController;

class SharedWorkoutsViewController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return mixed
     */
    public function index()
    {
        return (new SharedWorkoutsView)->showAll();
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
        return (new SharedWorkoutsView)->showID($id);
    }
}
