(function () {
	'use strict';

	angular.module('Mobipalma')
	.factory('DataFactory', [ '$http', function Factory( $http ) {
		var urlBase = 'https://api.mobipalma.mobi/1.2';
		var DataFactory = {};

		//	Paradas
		DataFactory.getParada = function ( id ) {
			return $http.get(urlBase + '/paradas/' + id);
		};
		DataFactory.getParadas = function () {
			return $http.get( urlBase + '/paradas' );
		};

		//	Aparcamientos
		DataFactory.getAparcamientos = function () {
			return $http.get( urlBase + '/aparcamientos' );
		};
		DataFactory.getAparcamiento = function ( id ) {
			return $http.get( urlBase + '/aparcamientos/' + id );
		};
		DataFactory.getAparcamientosEstados = function () {
			return $http.get( urlBase + '/aparcamientos/estados' );
		};

		//	Bicipalma
		DataFactory.getBicipalmaListado = function () {
			return $http.get( urlBase + '/bicipalma' );
		};
		DataFactory.getBicipalmaEstados = function () {
			return $http.get( urlBase + '/bicipalma/estados' );
		};

		//	Camaras
		DataFactory.getCamarasInfo = function () {
			return $http.get( urlBase + '/camaras' );
		};
		DataFactory.getCamara = function ( id ) {
			return $http.get( urlBase + '/camaras/' + id, {responseType: "blob"} );
		};
		DataFactory.getCamarasEstados = function () {
			return $http.get ( urlBase + '/camaras/estados' );
		};

		//	Trayectos
		DataFactory.getTrayectosInfo = function() {
			return $http.get( urlBase + 'trayectos' );
		};
		DataFactory.getTrayectosEstados = function() {
			return $http.get( urlBase + 'trayectos/estados' );
		};

		//	Avisos
		DataFactory.getAvisos = function () {
			return $http.get( urlBase + '/avisos' );
		};
		DataFactory.getAvisoInfo = function ( id ) {
			return $http.get( urlBase + '/avisos/' + id );
		};
		DataFactory.getAvisoImagen = function ( idAviso, idImagen ) {
			return $http.get( urlBase + /avisos/ + idAviso + '/imagen/' + idImagen );
		};

		//	Estaciones Eléctricas
		DataFactory.getEstacionesElectricas = function() {
			return $http.get( urlBase + '/estacioneselectricas' );
		};

		//	Líneas
		DataFactory.getLineasEmt = function() {
			return $http.get(urlBase + 'lineasemt' );
		};
		DataFactory.getLineaEmt = function ( id ) {
			return $http.get( urlBase + '/lineasemt/' + id );
		};

		//	Paradas Taxi
		DataFactory.getParadasTaxi = function() {
			return $http.get( urlBase + '/paradastaxi' );
		};

		return DataFactory;

	}]);
	
})();