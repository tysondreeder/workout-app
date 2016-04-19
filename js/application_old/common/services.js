'use strict';

angular
    .module('common.service', [])
    .factory('API', ['URISettings', function(URISettings) {
        var url = {};
        url.parts = URISettings.protocol + URISettings.apiUri + URISettings.version;

        return url;
    }])
    .factory('ResponseFactory', ['$q', function($q) {
        return function(resource) {
            var q = $q.defer();

            resource.then(function(resp) {
                q.resolve(resp);
            }, function(err) {
                q.reject(err);
            });

            return q.promise;
        };
    }]);



//return {
//    v1: {
//        users:{
//            user: url.parts + '/users',
//            data: url.parts + '/user-collections',
//            connections: url.parts + '/connections'
//        },
//        config: {
//            config: url.parts + '/config',
//            counts: url.parts + '/exercise-counts',
//            weights: url.parts + '/weights'
//        },
//        workouts: {
//            workoutList: url.parts + '/workouts',
//            collections: url.parts + '/workout-collections',
//            shared: url.parts + '/shared-workouts',
//            days: url.parts + '/workout-days',
//            sharedCollections: url.parts + '/shared-workout-collections',
//            workout: url.parts + '/workout',
//            exercises: url.parts + '/workout/:wid/exercise/:eid'
//        }
//    }
//};