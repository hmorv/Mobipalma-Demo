(function () {
	'use strict';

	angular.module('Mobipalma')
	.factory('authInterceptorService', ['$q', '$rootScope', '$injector', 'localStorageService', function ( $q, $rootScope, $injector, localStorageService ) {

		var authInterceptorServiceFactory = {};
		var $http;

		var _request = function (config) {

			config.headers = config.headers || {};

			var authData = localStorageService.get('token');
			if (authData) {
				config.headers.Authorization = 'Bearer ' + authData.token;
			}

			return config;
		};


		var _responseError = function (rejection) {
			var deferred = $q.defer();
			if (rejection.status === 401) {
				var TokenService = $injector.get('TokenService');
				TokenService.getToken().
				then(function (response) {
					localStorageService.set('token', {token: response.data.token});
					_retryHttpRequest(rejection.config, deferred);
				}, function () {
					//authService.logOut();
					//$location.path('/login');
					deferred.reject(rejection);
				});
			} else {
				deferred.reject(rejection);
			}
			return deferred.promise;
		};

		var _retryHttpRequest = function (config, deferred) {
			$http = $http || $injector.get('$http');
			$http(config).then(function (response) {
				deferred.resolve(response);
			}, function (response) {
				deferred.reject(response);
			});
		};

		authInterceptorServiceFactory.request = _request;
		authInterceptorServiceFactory.responseError = _responseError;

		return authInterceptorServiceFactory;
	}]);
})();