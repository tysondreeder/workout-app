<?php namespace App\Http\Controllers\Auth;

use Illuminate\Routing\Controller;

use App\Http\Requests;
use Illuminate\Http\Response;

class TokenController extends Controller
{
    public function index()
    {
        $data = new \stdClass;
        $data->token = csrf_token();
        $data->code = 200;

        if($data->token === '') {
            $data->code = 400;
        }
        return (new Response(get_object_vars($data), $data->code))->header('Content-Type', 'application/json');

    }
}