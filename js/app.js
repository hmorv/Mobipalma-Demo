(function () {
	'use strict';
	var app = angular
	.module('Mobipalma', [ 'ngRoute', 'ngMessages', 'LocalStorageModule', 'uiGmapgoogle-maps' ]);
	
	
	
	app.config(['$routeProvider', 'uiGmapGoogleMapApiProvider', function config( $routeProvider, uiGmapGoogleMapApiProvider ) {
	
		//	Definiciones para las rutas
		var home = {
			templateUrl: 'views/home/index.view.html',
			controller: 'Home.IndexController',
			controllerAs: 'vm',
			activetab: 'home'
		},
		aparcamientos = {
			templateUrl: 'views/aparcamientos/index.view.html',
			controller: 'Aparcamientos.IndexController',
			controllerAs: 'vm',
			activetab: 'aparcamientos'
		},
		listarAparcamientos = {
			templateUrl: 'views/aparcamientos/listar.view.html',
			controller: 'Aparcamientos.ListarController',
			controllerAs: 'vm',
			activetab: 'aparcamientos'
		},
		mapaAparcamientos = {
			templateUrl: 'views/aparcamientos/mapa.view.html',
			controller: 'Aparcamientos.MapaController',
			controllerAs: 'vm',
			activetab: 'aparcamientos'
		},
		//	Bicipalma
		bicipalma = {
			templateUrl: 'views/bicipalma/index.view.html',
			controller: 'Bicipalma.IndexController',
			controllerAs: 'vm',
			activetab: 'bicipalma'
		},
		estadosBicipalma = {
			templateUrl: 'views/bicipalma/estados.view.html',
			controller: 'Bicipalma.EstadosController',
			controllerAs: 'vm',
			activetab: 'bicipalma'
		},
		mapaBicipalma = {
			templateUrl: 'views/bicipalma/mapa.view.html',
			controller: 'Bicipalma.MapaController',
			controllerAs: 'vm',
			activetab: 'bicipalma'
		},
		listarBicipalma = {
			templateUrl: 'views/bicipalma/listar.view.html',
			controller: 'Bicipalma.ListarController',
			controllerAs: 'vm',
			activetab: 'bicipalma'
		},
		camaras = {
			templateUrl: 'views/camaras/index.view.html',
			controller: 'Camaras.IndexController',
			controllerAs: 'vm',
			activetab: 'camaras'
		},
		//	Paradas
		paradas = {
			templateUrl: 'views/paradas/index.view.html',
			controller: 'Paradas.IndexController',
			controllerAs: 'vm',
			activetab: 'paradas'
		},
		listarParadas = {
			templateUrl: 'views/paradas/listar.view.html',
			controller: 'Paradas.ListarController',
			controllerAs: 'vm'
		},
		consultarParadas = {
			templateUrl: 'views/paradas/consultar.view.html',
			controller: 'Paradas.ConsultarController',
			controllerAs: 'vm'
		},
		consultarParadaSingle = {
			templateUrl: 'views/paradas/consultarsingle.view.html',
			controller: 'Paradas.ConsultarSingleController',
			controllerAs: 'vm'
		},

		trayectos = {
			templateUrl: 'views/trayectos/index.view.html',
			controller: 'Trayectos.IndexController',
			controllerAs: 'vm',
			activetab: 'trayectos'
		},
		avisos = {
			templateUrl: 'views/avisos/index.view.html',
			controller: 'Avisos.IndexController',
			controllerAs: 'vm',
			activetab: 'avisos'
		},
		// estacionesElectricas = {
		// 	templateUrl: 'views/estacioneselectricas/index.view.html',
		// 	controller: 'EstacionesElectricas.IndexController',
		// 	controllerAs: 'vm',
		// 	activetab: 'estacione-selectricas'
		// },
		estacionesElectricas = {
			templateUrl: 'views/estacioneselectricas/mapa.view.html',
			controller: 'EstacionesElectricas.MapaController',
			controllerAs: 'vm',
			activetab: 'estaciones-electricas'
		},
		lineas = {
			templateUrl: 'views/lineas/index.view.html',
			controller: 'Lineas.IndexController',
			controllerAs: 'vm',
			activetab: 'lineas'
		},
		paradasTaxi = {
			templateUrl: 'views/paradastaxi/index.view.html',
			controller: 'ParadasTaxi.IndexController',
			controllerAs: 'vm',
			activetab: 'paradas-taxi'
		},
		mapaTaxi = {
			templateUrl: 'views/paradastaxi/mapa.view.html',
			controller: 'ParadasTaxi.MapaController',
			controllerAs: 'vm',
			activetab: 'paradas-taxi'
		},
		otherwise = {
			redirectTo: '/'
		};

		//	App routes
		$routeProvider
		.when('/', home)
		.when('/aparcamientos', aparcamientos)
		.when('/aparcamientos/listar', listarAparcamientos)
		.when('/aparcamientos/mapa', mapaAparcamientos)
		.when('/bicipalma', bicipalma)
		.when('/bicipalma/estados', estadosBicipalma)
		.when('/bicipalma/listar', listarBicipalma)
		.when('/bicipalma/mapa', mapaBicipalma)
		.when('/camaras', camaras)
		.when('/paradas/listar', listarParadas)
		.when('/paradas/consultar', consultarParadas)
		.when('/paradas/consultar/:id', consultarParadaSingle)
		.when('/paradas', paradas)
		.when('/trayectos', trayectos)
		.when('/avisos', avisos)
		.when('/estacioneselectricas', estacionesElectricas)
		.when('/lineas', lineas)
		.when('/paradastaxi', paradasTaxi)
		.when('/mapataxi', mapaTaxi)

		.otherwise( otherwise );

		uiGmapGoogleMapApiProvider.configure({
			key: 'TU_KEY_AQUI_COLEGA',
	        v: '3', //defaults to latest 3.X anyhow
	        libraries: 'weather,geometry,visualization'
	    });

	}]);

app.config([ '$httpProvider', function config2 ( $httpProvider ) {


    $httpProvider.interceptors.push('authInterceptorService');
}]);

app.run(['$rootScope', '$http', '$location', 'TokenService', 'localStorageService', function run ( $rootScope, $http, $location, TokenService, localStorageService ) {
	TokenService.getToken()
	.then(function(response) {
		if( localStorageService.set('token', {token: response.data.token}) ) {
			//console.log('valor asignado');
		localStorageService.set = ( 'token', { token: response.data.token } );
		}
		//console.log('token sin procesar: ' + response.data.token );
		var test = localStorageService.get('token');
		//console.log( 'token: ' + test.token );
	});

	//$http.defaults.headers.common.Authorization = 'Bearer ' + localStorageService.get('token');
}]);

})();