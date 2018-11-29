(function () {
    'use strict';

    angular.module('Mobipalma')
    .controller('Home.IndexController', ['TokenService', function Controller(TokenService) {
        var vm = this;

        initController();

        function initController() {
            console.log('Home.IndexController loaded');
        }
    }]);

})();