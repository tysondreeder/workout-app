var wc = angular.module('wc.app', ['ngRoute', 'appConfig.module', 'common.module', 'users.module']);

wc.constant('URISettings',
    {
        protocol: 'http:',
        apiUri: '//wc.mbautista.com/api',
        version: '/v1'
    }
);

wc.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/exercise', {
            templateUrl: 'js/application/workouts/views/exercises.html'
        });
});