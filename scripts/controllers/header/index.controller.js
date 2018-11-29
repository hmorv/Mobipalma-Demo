(function () {
	'use strict';

	angular.module('Mobipalma')
	.controller('Header.MainController', ['$scope', function Controller( $scope ) {
		var vm = this;

		initController();
		
		function initController() {
			console.log('Header.MainController loaded');
		}
	}]);
	
})();