'use strict';

wc
    .module('workoutListServicesModule', ['ngResource'])
    .factory('WorkoutListService', ['API', 'ResponseFactory', '$http',
        function(API, ResponseFactory, $http) {

            var url = API.parts +  + '/workout/list',
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

            this.remove = function(id) {
                resource = $http.delete(url + '/' + id);
                return response(resource);
            };

            return this;
}]);
