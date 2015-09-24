wc.services.appConfig = angular.module('wc.services.appConfig', ['ngResources']);

wc.services.appConfig.factory('AppConfigFactory', ['API', '$resources', '$log', '$q',
    function(API, $resources, $log, $q) {

        var url = API.v1.users.config;
        //var urlUserData = API.v1.users.data;

        var AppConfig = function(config) {
            this.user_id = null;

            if(angular.defined(config) === true) {
                angular.extend(this, config);
            }
        };

        AppConfig.prototype.get = function() {
            var deferred = $q.defer();
            var response = null;

            if(this.id === null) {
                response = $resource(url, {}).get();
            } else {
                response = $resource(url + '/:id', {id: this.user_id}).get();
            }

            response.$promise.then(function(callback) {
                deferred.resolve(callback);
            }, function(error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };

        AppConfig.prototype.save = function(params) {
            var deferred = $q.defer();
            var response = null;
            var updateMethod = { update: {method: 'PUT'}};

            if(this.id === null) {
                response = $resource(url).save(params);
            } else {
                response = $resource(url + '/:id', {id: this.user_id}, updateMethod).update(params);
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