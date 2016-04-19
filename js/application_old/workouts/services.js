workouts.services = angular.module('workouts.services', ['ngResource']);

workouts.url = {};
workouts.url.parts = URISettings.protocol + URISettings.apiUri + URISettings.version;
workouts.url.api = {
    counts: url.parts + '/exercise-counts',
    workouts: url.parts + '/workouts',
    workoutExercisesList: url.parts + '/workout',
    workoutCollections: url.parts + '/workout-collections',
    workoutExercises: url.parts + '/workout/:wid/exercise/:eid'
};

    //var Workout = function (workout) {
    //    if(angular.isDefined(workout)) {
    //        angular.extend(this, workout);
    //    }
    //};
    //
    //Workout.prototype.WorkoutCollections = {
    //    get: (function(params) {
    //        resource = $http.get(url.api.workoutCollections + '/' + params);
    //        return response(resource);
    //    }),
    //    getAll: (function() {
    //        resource = $http.get(url.api.workoutCollections);
    //        return response(resource);
    //    })
    //};
    //
    //Workout.prototype.WorkoutExercises = function (params) {
    //    var workout = $resource(url.api.workoutExercises),
    //        q = $q.defer();
    //
    //    workout.get(params, function(resp) {
    //        q.then(function(resp) {
    //            q.resolve(resp);
    //        }, function(err) {
    //            q.reject(err);
    //        });
    //    });
    //
    //    console.log(q);
    //
    //    return q.promise;
    //
    //    //post: (function (params) {
    //    //    resource = $http.post(url.workoutExercises, params);
    //    //    return response(resource);
    //    //}),
    //    //put: (function (params) {
    //    //    resource = $http.put(url.workoutExercises, params);
    //    //    return response(resource);
    //    //}),
    //    //remove: (function (params) {
    //    //    resource = $http.delete(url.workoutExercises, params);
    //    //    return response(resource);
    //    //})
    //};
    //
    //return Workout;

workouts.services.factory('WorkoutCollectionsFactory', ['ResponseFactory', 'WorkoutsApiFactory', '$http',
    function(ResponseFactory, WorkoutsApiFactory, $http) {

    var url = WorkoutsApiFactory,
        response = ResponseFactory,
        resource;

    this.get = function(id) {
        resource = $http.get(url.workoutCollections + '/' + id);
        return response(resource);
    };

    this.getAll = function() {
        resource = $http.get(url.workoutCollections);
        return response(resource);
    };

    return this;
}]);

workouts.services.factory('WorkoutExercisesFactory', ['ResponseFactory', 'WorkoutApiFactory', '$http',
    function(ResponseFactory, WorkoutApiFactory, $http) {

    var url = WorkoutApiFactory,
        response = ResponseFactory,
        resource;

    this.get = function (params) {
        resource = $http.get(url.workoutExercises, params);
        return response(resource);
    };

    this.post = function (params) {
        resource = $http.post(url.workoutExercises, params);

        return response(resource);
    };

    this.put = function (params) {
        resource = $http.put(url.workoutExercises, params);

        return response(resource);
    };

    this.remove = function (params) {
        resource = $http.delete(url.workoutExercises, params);

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

    this.getAll = function() {
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
