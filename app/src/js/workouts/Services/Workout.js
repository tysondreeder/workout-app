import XHR from '../../core/HTTP/XHR';

class Workout
{
    constructor()
    {
        this.url = {
            single: '/api/v1/workout',
            all: '/api/v1/workout/list'
        }
    }

    getId(id)
    {
        const url = `${this.url.single}/${id}`;
        return  XHR.get(url);
    }

    getAll()
    {
        return  XHR.get(this.url.all);
    }
}

export default Workout;
