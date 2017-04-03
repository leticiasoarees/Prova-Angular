angular.module('Vendas',['ngRoute'])
 .config(function($routeProvider){
    $routeProvider.when('/home',{
      controller : 'homeController',
      templateUrl : 'Partials/home.html'
    })
 })
