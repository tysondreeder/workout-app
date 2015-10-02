wc.services.appConfig = angular.module('wc.services.appConfig', ['ngResource']);

wc.services.appConfig.factory('AppConfigApiFactory', ['URISettings', function (URISettings) {
    var url = {};
    url.parts = URISettings.protocol + URISettings.apiUri + URISettings.version;

    return url.parts + '/config';
}]);

wc.services.appConfig.factory('AppConfigFactory', ['ResponseFactory', 'AppConfigApiFactory', '$http',
    function(ResponseFactory, AppConfigApiFactory, $http) {

    var url = AppConfigApiFactory,
        response = ResponseFactory,
        resource;

    this.get = function(id) {
        resource = $http.get(url + '/' + id);

        return response(resource);
    };

    this.post = function(params) {
        resource = $http.post(url, {params: params});

        return response(resource);
    };

    this.put = function(id, params) {
        resource = $http.put(url + '/' + id, {params: params});

        return response(resource);
    };

    this.delete = function(id) {
        resource = $http.delete(url + '/' + id);

        return response(resource);
    };

    return this;
}]);