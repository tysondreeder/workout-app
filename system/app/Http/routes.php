<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['prefix' => 'v1'], function() {
    Route::resource('config', 'ConfigController');
    Route::resource('connections', 'ConnectionsController');
    Route::resource('exercise/counts', 'CountsController');
    Route::resource('exercises/list', 'ExercisesController', array('only' => array('index')));
    Route::resource('exercise', 'ExercisesController', array('except' => array('index')));
    Route::resource('users', 'UsersController');
    Route::resource('users/collections', 'UsersViewController');
    Route::resource('weight/list', 'WeightsController');
    Route::resource('workout/list', 'WorkoutsController');
//    Route::resource('workout/list', 'WorkoutsViewController'); TODO: DO I NEED
    Route::resource('workout/days', 'DaysController');
    Route::resource('workout/shared', 'SharedWorkoutsController');
    Route::resource('workout/shared/collections', 'SharedWorkoutsViewController');
    Route::resource('workout', 'WorkoutsHasExercisesController');
    Route::resource('workout.exercise', 'WorkoutsHasExercisesController');
    Route::resource('auth/token', 'Auth\TokenController');
});
