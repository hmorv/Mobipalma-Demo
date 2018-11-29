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

	.controller('EstacionesElectricas.MapaController', ['TokenService', '$scope', 'DataFactory', 'uiGmapGoogleMapApi', function Controller(TokenService, $scope, DataFactory, uiGmapGoogleMapApi) {
		var vm = this;

		initController();

		$scope.map = {
			center: {
				latitude: 39.575559,
				longitude: 2.6457358
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

		$scope.title = 'Datos de la estación';


		function initController() {
			$scope.mapas = [];
			console.log('EstacionesElectricas.MapaController loaded');
			
			DataFactory.getEstacionesElectricas()
			.then(function(response) {
				console.log(response);
				procesarDatos(response);
			}, function (error) {
				//console.log(error);
			});	
		}

		function procesarDatos(response) {
			$scope.datos = response.data;
			
			cargarDatosMapa( $scope.datos );

		}

		function cargarDatosMapa( datos ) {
			for ( var x in datos ) {
                //console.log(datos[x]);
                console.log('enchufes: ' + datos[x].enchufes);
				$scope.mapas.push({
					id: datos[x].clave,
					coords: {
						latitude: datos[x].latitud,
						longitude: datos[x].longitud,
					},
                    nombre: datos[x].nombreEs,
                    // direccion: datos[x].direccion,
                    tipoEstacion: datos[x].tipoEstacionLabel,
                    enchufesNum: datos[x].enchufesCount,
                    enchufes: datos[x].enchufes,
                    horario: datos[x].horarioEs
                    //descripcion: datos[x].nombreEs

					//numero: x,
					//options: {
						//icon: 'images/icon-bus.png'
						

						/*labelContent : datos[x][2],
						labelAnchor: "16 33",
						labelClass: 'labelClass',
						labelStyle: {opacity: 0.75},
						labelInBackground: true*/
					//}
					
				});
			}
		}

		/*function mostrarDatosMarcados() {
			console.log("hola");
		}*/

		//console.log($scope.mapas);

		uiGmapGoogleMapApi.then(function(maps) {
			//console.log('mapa cargado');		
		});

	}]);
	
})();