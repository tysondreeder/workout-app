appConfig.controllers = angular.module('appConfig.controllers', ['appConfig.services']);

appConfig.controllers.controller('appConfigController', ['$scope', 'AppConfigFactory', function($scope, config) {
    //var user = UserFactory;
    var params = {
        email: 'juliane302@hotmail.com',
        name: 'Juliane Bautista',
        height: '{"feet": 6, "inches": 0, "cm": 182.88}',
        weight: '{"lb": 145, "kg": 65.7709}',
        bmi : 10,
        password: 'superwoman4589'
    }
    console.log(config.get(1));
}]);