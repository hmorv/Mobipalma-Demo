(function () {
	'use strict';
	
	angular.module('Mobipalma')
	.controller('Aparcamientos.IndexController', ['TokenService', '$http', function Controller(TokenService, $scope) {
		var vm = this;

		initController();

		function initController() {
			console.log('Aparcamientos.IndexController loaded');
			// $scope.links = {
			// 	listado
			// }
		}
	}]);	
	
})();