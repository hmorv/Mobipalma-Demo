(function () {
	'use strict';

	angular.module('Mobipalma')
		.controller('Bicipalma.IndexController', ['TokenService', 'DataFactory', '$scope', function Controller(TokenService, DataFactory, $scope) {
		var vm = this;

		initController();

		function initController() {
			console.log('Bicipalma.IndexController loaded');
			DataFactory.getBicipalmaEstados()
			.then(function(response) {
				//console.log(response);
			}, function(error) {
				//console.log(error);
			});
		}
	}]);
})();