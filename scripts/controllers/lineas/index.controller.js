(function () {
	'use strict';
	
	angular.module('Mobipalma')
	.controller('Lineas.IndexController', ['TokenService', function Controller(TokenService) {
		var vm = this;

		initController();

		function initController() {
			console.log('Lineas.IndexController loaded');
		}
	}]);
	
})();