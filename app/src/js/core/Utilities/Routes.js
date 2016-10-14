class Routes
{
    constructor() {
        this.object = {};
    }

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
            let url = instance.url.split('/');
            this._mapUrl(route, url);
            if(this._getParams(route)[0] === url[0]) {
                instance.method();
            }
        })
    }

    _validUrl(route)
    {
        return /^[#a-z0-9\/]+$/i.test(route);
    }

    _getParams(url)
    {
        return url.split('/');
    }

    getParam(key)
    {
        return this.object[key];
    }

    _mapUrl(urlMap, urlArray)
    {
        let params = urlMap.split('/');
        let values = location.hash.split('/');
        for(var k in params) {
            if(typeof urlArray[k] !== 'undefined' && urlArray[k].search(/^{/) !== -1) {
                let param = urlArray[k].slice(1, -1);
                this.object[param] = values[k];
            }
        }
    }
}

export default Routes;