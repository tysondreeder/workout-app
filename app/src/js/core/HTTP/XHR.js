class XHR {

    constructor() {}

    get(url) {
        return this._makeRequest('GET', url);
    }

    post(url, params) {
        return this._makeRequest('POST', url, params);
    }

    put(url, params) {
        return this._makeRequest('PUT', url, params);
    }

    remove(url, params) {
        return this._makeRequest('DELETE', url, params);
    }

    _makeRequest(method, url, params) {
        let m = method;
        let u = url;
        let p = params;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open(m, u);

            xhr.onload = () => {
                resolve(xhr.response);
            };

            xhr.onerror = () => {
                reject(xhr.statusText);
            };

            if(p && typeof p === 'object') {
                p = Object.keys(params).map((key) => {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(p['key']);
                }).join('&');
            }

            xhr.send();
        });
    }
}

export default new XHR();
