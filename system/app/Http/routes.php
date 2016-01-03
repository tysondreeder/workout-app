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
    Route::resource('exercise-counts', 'CountsController');
    Route::resource('exercises', 'ExercisesController');
    Route::resource('shared-workouts', 'SharedWorkoutsController');
    Route::resource('shared-workout-collections', 'SharedWorkoutsViewController');
    Route::resource('users', 'UsersController');
    Route::resource('user-collections', 'UsersViewController');
    Route::resource('weights', 'WeightsController');
    Route::resource('workouts', 'WorkoutsController');
    Route::resource('workout-collections', 'WorkoutsViewController');
    Route::resource('workout-exercises', 'WorkoutsHasExercisesController');
    Route::resource('auth/token', 'Auth\TokenController');
});
