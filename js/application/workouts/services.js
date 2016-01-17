workouts.services = angular.module('appConfig.services', ['ngResource']);

workouts.services.factory('WorkoutsApiFactory', ['URISettings', function (URISettings) {
    var url = {};
    url.parts = URISettings.protocol + URISettings.apiUri + URISettings.version;
    return {
        counts: url.parts + '/exercise-counts',
        workouts: url.parts + '/workouts',
        workoutCollections: url.parts + '/workout-collections',
        workoutExercises: url.parts + '/workout-exercises'
    };
}]);

workouts.services.factory('WorkoutCollectionsFactory', ['ResponseFactory', 'WorkoutsApiFactory', '$http',
    function(ResponseFactory, WorkoutApiFactory, $http) {

    var url = WorkoutsApiFactory,
        response = ResponseFactory,
        resource;

    this.get = function(id) {
        resource = $http.get(url.workoutCollections + '/' + id);
        return response(resource);
    };

    this.getAll = function() {
        resource = $http.get(url.workoutCollections + '/');
        return response(resource);
    };

    return this;
}]);

workouts.services.factory('WorkoutExercisesFactory', ['ResponseFactory', 'WorkoutApiFactory', '$http',
    function(ResponseFactory, WorkoutApiFactory, $http) {

    var url = WorkoutApiFactory,
        response = ResponseFactory,
        resource;

    this.get = function(id) {
        resource = $http.get(url.workoutExercises + '/' + id);
        return response(resource);
    };

    this.post = function(params) {
        resource = $http.post(url.workoutExercises, params);

        return response(resource);
    };

    this.put = function(id, params) {
        resource = $http.put(url.workoutExercises + '/' + id, params);

        return response(resource);
    };

    this.remove = function(id) {
        resource = $http.delete(url.workoutExercises + '/' + id);

        return response(resource);
    };

    return this;
}]);

workouts.services.factory('WorkoutsFactory', ['ResponseFactory', 'WorkoutApiFactory', '$http',
    function(ResponseFactory, WorkoutApiFactory, $http) {

    var url = WorkoutApiFactory,
        response = ResponseFactory,
        resource;

    this.get = function(id) {
        resource = $http.get(url.workouts + '/' + id);
        return response(resource);
    };

    this.getAll = function(id) {
        resource = $http.get(url.workouts + '/');
        return response(resource);
    };

    this.post = function(params) {
        resource = $http.post(url.workouts, params);

        return response(resource);
    };

    this.put = function(id, params) {
        resource = $http.put(url.workouts + '/' + id, params);

        return response(resource);
    };

    this.remove = function(id) {
        resource = $http.delete(url.workouts + '/' + id);

        return response(resource);
    };

    return this;
}]);

workouts.services.factory('CountsFactory', ['ResponseFactory', 'WorkoutApiFactory', '$http',
    function(ResponseFactory, WorkoutApiFactory, $http) {

    var url = WorkoutApiFactory,
        response = ResponseFactory,
        resource;

    this.get = function(id) {
        resource = $http.get(url.counts + '/' + id);
        return response(resource);
    };

    this.post = function(params) {
        resource = $http.post(url.counts, params);

        return response(resource);
    };

    this.put = function(id, params) {
        resource = $http.put(url.counts + '/' + id, params);

        return response(resource);
    };

    this.remove = function(id) {
        resource = $http.delete(url.counts + '/' + id);

        return response(resource);
    };

    return this;
}]);
