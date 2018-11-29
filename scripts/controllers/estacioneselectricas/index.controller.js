(function () {
	'use strict';
	
	angular.module('Mobipalma')
	.controller('EstacionesElectricas.IndexController', ['TokenService', function Controller(TokenService) {
		var vm = this;

		initController();

		function initController() {
			console.log('EstacionesElectricas.IndexController loaded');
		}
	}]);
	
})();