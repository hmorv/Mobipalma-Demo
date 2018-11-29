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

	.controller('Paradas.ListarController', ['TokenService', '$scope', 'DataFactory', 'uiGmapGoogleMapApi', function Controller(TokenService, $scope, DataFactory, uiGmapGoogleMapApi) {
		var vm = this;

		initController();

		$scope.map = {
			center: {
				latitude: 39.5699474,
				longitude: 2.6457358
			},
			zoom: 11
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

		$scope.title = 'Datos de la parada';


		function initController() {
			$scope.mapas = [];
			console.log('Paradas.ListarController loaded');
			
			DataFactory.getParadas()
			.then(function(response) {
				//console.log(response);
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
				$scope.mapas.push({
					id: x,
					coords: {
						latitude: datos[x][0],
						longitude: datos[x][1],
					},
					nombre: datos[x][2],
					numero: x,
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