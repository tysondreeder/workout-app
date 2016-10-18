class Routes
{
    constructor() {
        this.object = {};
    }

    on(event, object) {
        return window.addEventListener(
            event,
            () => {
                this._set(object)
            }
        );
    }

    getParam(key)
    {
        return this.object[key];
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
            this._mapUrl(url, route);
            if(this._sliceUrlParams(route)[0] === url[0]) {
                instance.method();
            }
        })
    }

    _validUrl(route)
    {
        return /^[#a-z0-9\/]+$/i.test(route);
    }

    _sliceUrlParams(url)
    {
        return url.split('/');
    }

    _mapUrl(urlMap, urlArray)
    {
        let values = urlArray.split('/');
        for(const [i, v] of urlMap.entries()) {
            if (v.includes('{') !== -1) {
                let param = v.slice(1, -1);
                this.object[param] = values[i];
            }
        }
    }
}

export default Routes;