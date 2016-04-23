'use strict';

wc
    .module('daysServicesModule', ['ngResource'])
    .factory('DaysService', ['API', 'ResponseFactory', '$http',
        function(API, ResponseFactory, $http) {

            var url = API.parts +  + '/workout/days',
                response = ResponseFactory,
                resource;

            this.getAll = function() {
                resource = $http.get(url);
                return response(resource);
            };

            this.get = function(id) {
                resource = $http.get(url + '/' + id);
                return response(resource);
            };

            return this;
}]);
