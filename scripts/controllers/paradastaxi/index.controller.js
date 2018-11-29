(function () {
	'use strict';
	
	angular.module('Mobipalma')
	.controller('ParadasTaxi.IndexController', ['TokenService', 'DataFactory', '$scope', function Controller( TokenService, DataFactory, $scope ) {
		var vm = this;

		initController();

		function initController() {
			console.log('ParadasTaxi.IndexController loaded');

			DataFactory.getParadasTaxi( )
			.then(function(response) {
				//console.log(response);
				if (response.status === 200 ) {
					procesarResultado(response);
				} else {
					procesarError(response);
				}
			}, function (error) {
				//console.log(error);
				procesarError(error);
			});

			function procesarResultado(response) {
				//console.log(response);
				
				$scope.datos = response.data;
			}
			function procesarError(error) {
				//console.log('error: ' + error);
				$scope.datos = 'error peticion';
			}
		}
	}]);
	
})();