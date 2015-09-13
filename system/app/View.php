<?php namespace App;

use App\Actions as BaseActions;

/**
 * Class Model
 *
 * @package App
 */
abstract class View extends BaseActions
{
    /**
     * Access all the records. Use the protected method getAll().
     *
     * @return mixed
     */
    abstract public function showAll();

    /**
     * Show a single record. Use getId();
     *
     * @param $id
     *
     * @return mixed
     */
    abstract public function showId($id);
}
