'use strict';

var wc = angular;

wc
    .module('wc.app', ['ngRoute', 'appConfig.module', 'common.module', 'users.module', 'workouts.module'])
    .constant('URISettings',
        {
            protocol: 'http:',
            apiUri: '//wc.mbautista.com/api',
            version: '/v1'
        }
    )
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/workout/:wid/', {
                templateUrl: 'js/application/workouts/templates/workouts.html'
            })
            .when('/workout/:wid/exercise/:eid', {
                templateUrl: 'js/application/workouts/templates/exercises.html'
            });

        //$locationProvider.html5Mode(true);
    });