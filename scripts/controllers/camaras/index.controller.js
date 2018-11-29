(function () {
	'use strict';
	
	angular.module('Mobipalma')
	.controller('Camaras.IndexController', ['TokenService', 'DataFactory', '$scope', function Controller( TokenService, DataFactory, $scope ) {
		var vm = this;

		initController();

		function initController() {
			console.log('Camaras.IndexController loaded');
			$scope.datos = null;
			$scope.imagen = '';
			DataFactory.getCamara( 1 )
			.then( function ( response ) {
				$scope.datos = response.data;
				var fr = new FileReader();
				fr.readAsDataURL(response.data);
				//console.log(response);
				fr.onload = function(e) {
					$scope.imagen = e.target.result;
				};
				//$scope.imagen = fr.result;//btoa(unescape(encodeURIComponent(response.data)));
				//console.log($scope.imagen);
			}) ;
		}
	}]);
	
})();