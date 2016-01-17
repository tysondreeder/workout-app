appConfig.services = angular.module('appConfig.services', ['ngResource']);

appConfig.services.factory('ApiFactory', ['URISettings', function (URISettings) {
    var url = {};
    url.parts = URISettings.protocol + URISettings.apiUri + URISettings.version;
    var users = {
        user: url.parts + '/users',
        data: url.parts + '/user-collections'
    };

    return users;
}]);

appConfig.services.factory('AppConfigFactory', ['ResponseFactory', 'AppConfigApiFactory', '$http',
    function(ResponseFactory, AppConfigApiFactory, $http) {

    var url = AppConfigApiFactory,
        response = ResponseFactory,
        resource;

    this.get = function(id) {
        resource = $http.get(url + '/' + id);

        return response(resource);
    };

    this.post = function(params) {
        resource = $http.post(url, params);

        return response(resource);
    };

    this.put = function(id, params) {
        resource = $http.put(url + '/' + id, params);

        return response(resource);
    };

    this.delete = function(id) {
        resource = $http.delete(url + '/' + id);

        return response(resource);
    };

    return this;
}]);