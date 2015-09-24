wc.services.users = angular.module('wc.services.users', ['ngResource']);

wc.services.users.factory('UserFactory', ['$resource', '$log', 'API', '$q',
    function($resource, $log, API, $q) {

    var url = API.v1.users.user;
    var urlUserData = API.v1.users.data;

    var User = function(user) {
        this.id = null;

        if(angular.isDefined(user) === true) {
            angular.extend(this, user);
        }
    };

    User.prototype.get = function() {
        var deferred = $q.defer();
        var response = null;

        if(this.id === null) {
            response = $resource(url, {}).get();
        } else {
            response = $resource(url + '/:id', {id: this.id}).get();
        }

        response.$promise.then(function(callback) {
            deferred.resolve(callback);
        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    };

    User.prototype.getData = function() {
        var deferred = $q.defer();
        var response = null;

        if(this.id === null) {
            return false;
        } else {
            response = $resource(urlUserData + '/:id', {id: this.id}).get();
        }

        response.$promise.then(function(callback) {
            deferred.resolve(callback);
        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    };

    User.prototype.save = function(params) {
        var deferred = $q.defer();
        var response = null;
        var updateMethod = { update: {method: 'PUT'}};

        if(this.id === null) {
            response = $resource(url).save(params);
        } else {
            response = $resource(url + '/:id', {id: this.id}, updateMethod).update(params);
        }

        response.$promise.then(function(callback) {
            deferred.resolve(callback)
        }, function(error) {
            $log.log(error);
            deferred.reject(error);
        });

        return deferred.promise;
    };

    return User;
}]);