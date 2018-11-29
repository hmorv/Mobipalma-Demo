(function () {
	'use strict';
	
	angular.module('Mobipalma')
	.controller('Trayectos.IndexController', ['TokenService', function Controller(TokenService) {
		var vm = this;

		initController();

		function initController() {
			console.log('Trayectos.IndexController loaded');
		}
	}]);
	
})();