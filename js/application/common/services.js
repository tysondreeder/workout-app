wc.services = angular.module('wc.services', ['wc.services.users', 'wc.services.appConfig']);

//wc.services.factory('API', ['URISettings', function(URISettings) {
//    var url = {};
//    url.parts = URISettings.protocol + URISettings.apiUri + URISettings.version;
//
//    return {
//        v1: {
//            users:{
//                user: url.parts + '/users',
//                data: url.parts + '/user-collections',
//                config: url.parts + '/config',
//                connections: url.parts + '/connections'
//            },
//            config: {
//                counts: url.parts + '/counts',
//                weights: url.parts + '/weights'
//            },
//            workouts: {
//                workouts: url.parts + '/workouts',
//                collections: url.parts + '/workout-collections',
//                exercises: url.parts + '/workout-exercises',
//                exerciseCounts: url.parts + '/exercise-counts',
//                shared: url.parts + '/shared-workouts',
//                sharedCollections: url.parts + '/shared-workout-collections'
//            }
//        }
//    };
//}]);



wc.services.factory('ResponseFactory', ['$q', function($q) {
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