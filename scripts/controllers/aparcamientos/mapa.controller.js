(function () {
	'use strict';
	
	angular
	.module('Mobipalma')
	.directive('goBackHistory', ['$window', function ($window) {
		return {
			restrict: 'A',
			link: function (scope, elm, attrs) {
				elm.on('click', function ($event) {
					$event.stopPropagation();
					if ($window.history.length) {
						$window.history.back();
					} else {
						$window.close();  
					}
				});
			}
		};
	}])

	.controller('Aparcamientos.MapaController', ['TokenService', '$scope', 'DataFactory', 'uiGmapGoogleMapApi', '$q', function Controller( TokenService, $scope, DataFactory, uiGmapGoogleMapApi, $q ) {
		var vm = this;

		initController();

		$scope.map = {
			center: {
				latitude: 39.5823334,
				longitude: 2.6456419
			},
			zoom: 14
		};

		$scope.windowOptions = {
			visible: false
		};

		$scope.onClick = function() {
			$scope.windowOptions.visible = !$scope.windowOptions.visible;
		};

		$scope.closeClick = function() {
			$scope.windowOptions.visible = false;
		};

		$scope.title = 'Datos del aparcamiento';


		function initController() {
			$scope.mapas = [];
			console.log('Aparcamientos.MapaController loaded');
			
			DataFactory.getAparcamientos()
			.then(function(response) {
				//console.log(response);
				procesarDatos(response);
			}, function (error) {
				//console.log(error);
			});
		}

		function procesarDatos(response) {
			$scope.resultado = '';
			function getDatosAparcamiento ( id ) {
				var a;
				DataFactory.getAparcamiento( id )
				.then( function( response ) {
					//console.log(response.data);
					$scope.resultado = response.data;
				}, function( rejection ) {
					//console.log(rejection);
				});
				//console.log('id aparcamiento: ' + id);

			}
			$scope.datos = response.data;
			$scope.datosComplementarios = [];
			var promesas = [];
			var $d = $q.defer();
			//	El -2 es para evitar los 404... he mandado ticket a AT4
			for( var i = 0; i < $scope.datos.length - 2; i++ ) {
				//	Obtener datos aparcamiento
				
				promesas.push(DataFactory.getAparcamiento( $scope.datos[i].id ));
			}

			function noop() {}

			var promesasMultiples = $q.all(promesas);
			promesasMultiples
			.then(function (promesasRes) {
				cargarDatosMapa( $scope.datos, promesasRes );
			})
			.catch(noop());			
			//	$d.resolve(promesasRes);

		}

		function cargarDatosMapa( datos, datosComplementarios ) {
			for ( var i = 0; i < datosComplementarios.length; i++ ) {
				//console.log(datos[x]);
				$scope.mapas.push({
					id: datos[i].id,
					coords: {
						latitude: datos[i].latitud,
						longitude: datos[i].longitud,
					},
					nombre: datos[i].nombre,
					plazas: datos[i].numeroPlazas,
					plazasLibres: datosComplementarios[i].data.plazasLibres,
					estado: datosComplementarios[i].data.nivel
				});
			}
			uiGmapGoogleMapApi.then(function(maps) {
					//console.log('mapa cargado');		
				});
		}
	}]);
})();