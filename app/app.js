'use strict';

// Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).



//var routerApp = angular.module('sprocketApp.router',['ui.router'],'sprocketApp');
angular.module('sprocketApp',['ui.router']).config(function( $stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('placeOrder');
  $stateProvider
      .state('placeOrder',{
    url:'placeOrder',
    templateUrl:'SprocketApp/placeOrder.html',
    controller:'placeOrderCtrl'
  })

  .state('history',{
    url:'history',
    templateUrl:'SprocketApp/history.html',
    controller:'historyCtrl'
  });

});



    
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');
//
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);
