<?php namespace App\Http\Controllers;

use App\UsersView;

use Illuminate\Routing\Controller as BaseController;

class UsersViewController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return mixed
     */
//    public function index()
//    {
//        return (new UsersView)->showAll();
//    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     *
     * @return mixed
     */
    public function show($id)
    {
        $ids['user_id'] = $id;
        return (new UsersView)->showID($ids);
    }
}