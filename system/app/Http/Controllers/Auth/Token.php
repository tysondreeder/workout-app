<?php namespace App\Http\Controllers\Auth;

use Illuminate\Routing\Controller;

class Token extends Controller
{
    public function getIndex()
    {
        return csrf_token();
    }
}