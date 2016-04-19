exercises.services = angular.module('appConfig.services', ['ngResource']);

exercises.services.factory('ExercisesApiFactory', ['URISettings', function (URISettings) {
    var url = {};
    url.parts = URISettings.protocol + URISettings.apiUri + URISettings.version;

    return url.parts + '/exercises';
}]);

exercises.services.factory('ExercisesFactory', ['ResponseFactory', 'ExercisesApiFactory', '$http',
    function(response, url, $http) {

    var resource;

    this.get = function(id) {
        resource = $http.get(url.exercises + '/' + id);
        return response(resource);
    };

    this.getAll = function(id) {
        resource = $http.get(url.exercises + '/');
        return response(resource);
    };

    this.post = function(params) {
        resource = $http.post(url.exercises, params);

        return response(resource);
    };

    this.put = function(id, params) {
        resource = $http.put(url.exercises + '/' + id, params);

        return response(resource);
    };

    this.remove = function(id) {
        resource = $http.delete(url.exercises + '/' + id);

        return response(resource);
    };

    return this;
}]);