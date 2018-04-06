console.log('in client');

let myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  console.log('myApp -- config');
$routeProvider
  .when('/', {
    redirectTo: 'login'
  })
  .when('/login', {
    templateUrl: '/views/login.html',
    controller: 'FacebookController as vm'
  })
  .otherwise({
    template: '<h1>404</h1>'
  });
}]);
