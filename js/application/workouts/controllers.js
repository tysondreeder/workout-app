workouts.controllers = angular.module('workouts.controllers', ['workouts.services']);

workouts.controllers.controller('workoutCollectionsController', ['$scope', 'WorkoutCollectionsFactory',
    function($scope, workouts) {
    $scope.allWorkouts = workouts.getAll();
}]);