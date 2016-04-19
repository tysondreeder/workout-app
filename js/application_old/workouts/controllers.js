workouts.controllers = angular.module('workouts.controllers', ['workouts.services']);

workouts.controllers.controller('workoutCollectionsController', ['$scope', 'WorkoutsApiFactory', '$routeParams', '$log',
    function($scope, Workouts, $routeParams, $log) {
    var workout = new Workouts();
        $log.log(workout.WorkoutCollections);
        workout.WorkoutCollections.getAll().then(function(resp) {
        console.log($routeParams);
        $scope.allWorkouts = resp.data.response;
    });
}]);

workouts.controllers.controller('exerciseController', ['$scope', 'WorkoutExercisesFactory', '$routeParams', '$log',
    function($scope, Workouts, $routeParams, $log) {
        var workout = new Workouts(),
            params = {
                wid: $routeParams.wid,
                eid: $routeParams.eid
            };
        $log.log(params);
        $log.log(exercise.WorkoutExercisesFactory(params).get);
        var exercise = workout.WorkoutExercises.get(params);

        console.log(workout.WorkoutExercises(params).get.then);


    }]);