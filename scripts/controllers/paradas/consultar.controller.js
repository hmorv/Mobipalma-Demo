(function () {
	'use strict';
	
	angular.module('Mobipalma')
	.filter('secondsToDateTime', [function() {
			return function(seconds) {
			    //var days = Math.floor(seconds/86400);
			    //var hours = Math.floor((seconds % 86400) / 3600);
			    var mins = Math.floor(((seconds % 86400) % 3600) / 60);
			    var secs = ((seconds % 86400) % 3600) % 60;
			    //return (days > 0 ? days+'d ' : '') + ('00'+hours).slice(-2) +':' + ('00'+mins).slice(-2)+':' + ('00'+secs).slice(-2);
			    return ('00'+mins).slice(-2)+':' + ('00'+secs).slice(-2);
			    };
			}])

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
	
	.controller('Paradas.ConsultarController', ['TokenService', 'DataFactory', '$scope', '$http', function Controller( TokenService, DataFactory, $scope, $http ) {
		var vm = this;

		initController();

		function initController() {
			console.log('Paradas.ConsultarController loaded');
			
			$scope.parada = null;
			//$scope.datos = '';

			$scope.enviar = function() {
				$scope.datos = {};
				//TokenService.getToken();
				DataFactory.getParada( $scope.parada )
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
			};

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