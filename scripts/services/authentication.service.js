(function () {
	'use strict';

	app.module('Mobipalma');
	app.factory(['AuthenticationService', '$http', '$localStorage', function Service ( $http, $localStorage ) {
		
		var service = {};

		service.Login = Login;
		service.Logout = Logout;

		function Login(username, password, callback) {
			$http.post('dd/gettoken.php', {username: username, password: password})
				.success(function (response) {
					if ( response.token ) {
						$localStorage.currentUser = { username: username, password: password };

						//	Add jwt token to auth header for all requests made by $http service
						$http.default.headers.common.Authorization = 'Bearer ' + response.token;
						callback(true);
					} else {
						callback(false);
					}
				});
		}

		function logout() {
			delete $localStorage.currentUser;
			$http.defaults.headers.common.Authorization = '';
		}

		return service;
	}]);
})();