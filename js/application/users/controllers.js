wc.controllers.users = angular.module('wc.controllers.users', ['wc.services.users']);

wc.controllers.users.controller('usersController', ['$scope', 'UserFactory', function($scope, UserFactory) {
    var user = new UserFactory({id:1});
    var params = {
        email: 'juliane302@hotmail.com',
        name: 'Juliane Bautista',
        height: '{"feet": 6, "inches": 0, "cm": 182.88}',
        weight: '{"lb": 145, "kg": 65.7709}',
        bmi : 10,
        password: 'superwoman4589'
    }
    console.log(user.get());
}]);