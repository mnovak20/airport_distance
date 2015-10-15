(function () {
  'use strict';

  angular
    .module('home')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'home/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      });
  }
}());
