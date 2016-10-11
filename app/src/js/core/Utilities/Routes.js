class Routes
{
    constructor() {}

    $on(event, object) {
        return window.addEventListener(
            event,
            () => {
                this._set(object)
            }
        );
    }

    _set(object)
    {
        let route = '';
        if(location.hash !== '') {
            route = location.hash;
        } else {
            route = 'default';
        }
        if(this._validUrl(route) === true) {
            this._parseRouteObject(route, object);
        }
    }

    _parseRouteObject(route, object)
    {
        object.map(instance => {
            if(route === instance.url) {
                instance.method();
            }
        })
    }

    _validUrl(route)
    {
        return /^[#a-z0-9\/]+$/i.test(route);
    }
}

export default Routes;