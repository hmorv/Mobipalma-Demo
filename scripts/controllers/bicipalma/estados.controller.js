(function () {
	'use strict';

	angular.module('Mobipalma')
	.controller('Bicipalma.EstadosController', ['TokenService', 'DataFactory', '$scope', function Controller( TokenService, DataFactory, $scope ) {
		var vm = this;

		initController();

		function initController() {
			$scope.datos = {};
			$scope.contador = 0;
			console.log('Bicipalma.EstadosController loaded');
			DataFactory.getBicipalmaEstados()
			.then(function(response) {
				//console.log(response);
				procesarDatos(response);
			}, function(error) {
				//console.log(error);
			});
		}

		function procesarDatos(response) {
			$scope.datos = response.data;
			
			DataFactory.getBicipalmaListado()
			.then( function (response)  {
				//console.log(response);
				$scope.lista = response.data;
			}, function (error) {
				//console.log(error);
			});
		}
	}]);
	
})();