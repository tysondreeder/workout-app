<?php namespace App\Http\Controllers;

use App\DaysModel;

use Illuminate\Routing\Controller as BaseController;

class DaysController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return mixed
     */
    public function index()
    {
        return (new DaysModel)->showAll();
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
        $ids['day_id'] = $id;
        return (new DaysModel)->showID($ids);
    }
}