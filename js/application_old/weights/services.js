users.services = angular.module('users.services', ['ngResource']);

users.services.factory('UserApiFactory', ['URISettings', function (URISettings) {
    var url = {};
    url.parts = URISettings.protocol + URISettings.apiUri + URISettings.version;
    var users = {
        user: url.parts + '/users',
        data: url.parts + '/user-collections'
    };

    return users;
}]);

users.services.factory('UserFactory', ['ResponseFactory', 'UserApiFactory', '$http',
    function(ResponseFactory, UserApiFactory, $http) {

    var url = UserApiFactory,
        response = ResponseFactory,
        resource;

    this.get = function(id) {
        resource = $http.get(url.data + '/' + id);

        return response(resource);
    };

    this.post = function(params) {
        resource = $http.post(url.user, {params: params});

        return response(resource);
    };

    this.put = function(id, params) {
        resource = $http.put(url.user + '/' + id, {params: params});

        return response(resource);
    };

    this.delete = function(id) {
        resource = $http.delete(url.user + '/' + id);

        return response(resource);
    };

    return this;
}]);
