var workouts = angular.module('workout.module', ['workout.services', 'workout.controllers']);

workouts.services.factory('WorkoutApiFactory', ['URISettings', function (URISettings) {
    var url = {};
    url.parts = URISettings.protocol + URISettings.apiUri + URISettings.version;
    var workouts = {
        workouts: url.parts + '/workouts',
        collections: url.parts + '/workout-collections',
        exercises: url.parts + '/workout-exercises'
    };

    return workouts;
}]);