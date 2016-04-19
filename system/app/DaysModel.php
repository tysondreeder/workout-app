<?php namespace App;

use App\View as BaseView;

class DaysModel extends BaseView
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function showAll()
    {
        return $this->getAll('days');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function showId($id)
    {
        $array = array(
            'day_id',
            'day_name'
        );

        return $this->getId(
            'days',
            $array,
            $id
        );
    }
}
