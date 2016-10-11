import XHR from '../../core/HTTP/XHR';

class List
{
    constructor()
    {
        this.url = '/api/v1/workout/list';
    }

    get()
    {
        return  XHR.get(this.url);
    }
}

export default List;
