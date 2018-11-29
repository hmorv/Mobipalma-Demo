(function () {
	'use strict';
	
	angular.module('Mobipalma')
	.controller('TokenController', 'angular-jwt', ['TokenService', 'jwtHelper', function Controller( TokenService, jwtHelper ) {
		var vm = this;

		initController();

		function initController() {
			console.log('TokenController loaded');
			var token;
			TokenService.getToken.then( function (response) {
				token = jwtHelper.decodeToken(response);
			});
			var date = jwtHelper.getTokenExpirationDate(token);
		}
	}]);
	
})();