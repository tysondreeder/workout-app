workouts.directives = angular.module('workouts.directives', ['workouts.controllers']);

workouts.directives.directive('workoutList', function(){
    return {
        templateUrl: 'js/application/workouts/views/list.html',
        controller: 'workoutCollectionsController'
    }
});