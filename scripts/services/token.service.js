(function () {
	'use strict';

	//var app = angular;

	//var app = ;
	angular.module('Mobipalma')
	.factory('TokenService', ['$http', 'localStorageService', function Service( $http, localStorageService ) {
			
		var service = {};

		service.getToken = getToken;

		function getToken() {
			return $http.post('dd/gettoken.php');
		}
		return service;

	}]);
})();