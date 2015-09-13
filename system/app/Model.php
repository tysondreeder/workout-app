<?php namespace App;

use App\Actions as BaseActions;

/**
 * Class Model
 *
 * @package App
 */
abstract class Model extends BaseActions
{
    /**
     * Access all the records. Use the protected method getAll().
     *
     * @return mixed
     */
    abstract public function showAll();

    /**
     * Insert a record. Use setInsert();
     *
     * @param $request
     *
     * @return mixed
     */
    abstract public function postInsert($request);

    /**
     * Show a single record. Use getId();
     *
     * @param $id
     *
     * @return mixed
     */
    abstract public function showId($id);

    /**
     * Update a record. Use setUpdate().
     *
     * @param $request
     * @param $id
     *
     * @return mixed
     */
    abstract public function putUpdate($request, $id);
}
