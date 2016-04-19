users.controllers = angular.module('users.controllers', ['users.services']);

users.controllers.controller('usersController', ['$scope', 'UserFactory', function($scope, user) {
    //var user = UserFactory;
    var params = {
        email: 'juliane302@hotmail.com',
        name: 'Juliane Bautista',
        height: '{"feet": 6, "inches": 0, "cm": 182.88}',
        weight: '{"lb": 145, "kg": 65.7709}',
        bmi : 10,
        password: 'superwoman4589'
    }
    console.log(user.get(5));
}]);