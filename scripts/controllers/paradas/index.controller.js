(function () {
	'use strict';
	
	angular.module('Mobipalma')
	.controller('Paradas.IndexController', ['TokenService', '$http', function Controller(TokenService, $scope) {
		var vm = this;

		initController();

		function initController() {
			console.log('Paradas.IndexController loaded');
			// $scope.links = {
			// 	listado
			// }
		}
	}]);	
	
})();