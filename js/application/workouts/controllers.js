workouts.controllers = angular.module('workouts.controllers', ['workouts.services']);

workouts.controllers.controller('workoutCollectionsController', ['$scope', 'WorkoutCollectionsFactory',
    function($scope, workouts) {
    workouts.getAll().then(function(resp) {
        $scope.allWorkouts = resp.data.response;
    });
}]);