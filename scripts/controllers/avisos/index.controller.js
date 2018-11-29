(function () {
	'use strict';

	angular
	.module('Mobipalma')
	.controller('Avisos.IndexController', ['TokenService', 'DataFactory', '$scope', function Controller( TokenService, DataFactory, $scope ) {
		var vm = this;

		initController();

		function initController() {
			console.log('Avisos.IndexController loaded');

			$scope.imagenes = [];

			DataFactory.getAvisos()
			.then(function(response) {
				//console.log(response);
				procesarDatos(response);
			}, function (error) {
				//console.log(error);
			});
		}

		function procesarDatos(response) {
			$scope.datos = response.data;
			//getAvisosImagenes();

		}

		function getAvisosImagenes() {
			for(var i = 0; i < $scope.datos.length; i++) {
				DataFactory.getAvisoInfo( $scope.datos[i].id )
				.then(function(response) {
					$scope.imagenes.push({
						id: response.data.id,
						imagenes: response.data.imagenavisos
					});
					//console.log($scope.imagenes);

				}, function(error) {
					//console.log(error);
				});

				
				/*$imagenes.push({
					id: aviso.id,

				})*/
			}
		}
	}]);
	
})();