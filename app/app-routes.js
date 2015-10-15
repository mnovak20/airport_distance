(function () {
  'use strict';

  angular
    .module('airport_dist')
    .config(config);

  function config($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/home'
    });
  }
}());
