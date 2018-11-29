(function () {
	'use strict';

		angular.module('Mobipalma')
		.controller('Aparcamientos.ListarController', ['TokenService', 'DataFactory', '$scope', function Controller( TokenService, DataFactory, $scope ) {
		var vm = this;

		initController();

		function initController() {
			console.log('Aparcamientos.IndexController loaded');

			DataFactory.getAparcamientos()
			.then(function(response) {
				//console.log(response);
				procesarDatos(response);
			}, function (error) {
				//console.log(error);
			});
		}

		function procesarDatos(response) {
			$scope.datos = response.data;
			$scope.disponibilidad = [];

			function insertarDispo(id, pl, n) {
				$scope.disponibilidad.push({
					id: id,
					plazas: pl,
					nivel: n
				});
			}

			function getAparcamiento( idAparcamiento ) {
				DataFactory.getAparcamiento( idAparcamiento )
				.then( function ( response ) {
					insertarDispo( response.data.id, response.data.plazasLibres, response.data.nivel );
					//console.log( response );
				}, function ( error ) {
					//console.log( error );
				});
			}

			for (var i = 0; i < $scope.datos.length; i++) {
				getAparcamiento( $scope.datos[i].id);
			}
		}
	}]);
	
	
})();