<?php namespace App;

use App\View as BaseView;

class UsersView extends BaseView
{
    /**
     * Display a listing of the resource.
     *
     * @return mixed
     */
    public function showAll()
    {
        return $this->getAll(
            'users_v'
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     *
     * @return mixed
     */
    public function showId($id)
    {
        $array = array(
            'user_email',
            'user_name',
            'user_password',
            'user_height',
            'user_weight',
            'user_bmi',
            'user_created',
            'weight_type',
            'language',
            'start_of_week'
        );

        return $this->getId(
            'users_v',
            $array,
            'user_id',
            $id
        );
    }
}
