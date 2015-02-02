var imogenApp = angular.module('imogenApp', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/views/home.html'
			})
			.otherwise({
				templateUrl: '/views/home.html'
			})
	});
