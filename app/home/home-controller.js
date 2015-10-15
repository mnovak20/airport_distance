(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', 'airports'];

  function HomeCtrl($scope, airports ) {
  
    //setting injected airports to a scope var
    $scope.airports = airports;


    //creating an array of only names of airports
    $scope.usAirportNames = $scope.airports.map(function(airport){
      return airport[1];
    });

    //var used to store distance
    $scope.nauticalDist = null;

    //loop to find the airport details from the name
    $scope.findAirportElement = function(){  
      if($scope.origin || $scope.destination){
        for(var i = 0; i < $scope.airports.length; i++){
          if($scope.origin === $scope.airports[i][1]){
            $scope.selectedAirport1 = $scope.airports[i];
            $scope.airport1coords = [$scope.selectedAirport1[6],$scope.selectedAirport1[7]];
          }else if($scope.destination === $scope.airports[i][1]){
            $scope.selectedAirport2 = $scope.airports[i];
            $scope.airport2coords = [$scope.selectedAirport2[6],$scope.selectedAirport2[7]];
          }
        }
      } 
    };

    //calling calcDist() when selectedAirport changes
    $scope.$watch('selectedAirport1', function(){
      $scope.calcDist();
    });

    $scope.$watch('selectedAirport2', function(){
      $scope.calcDist();
    });


    //calcDist calls distance() by passing in the necessary coordinates
    $scope.calcDist = function(){
      if($scope.selectedAirport1 && $scope.selectedAirport2){
        $scope.nauticalDist = distance($scope.selectedAirport1[6],$scope.selectedAirport1[7],$scope.selectedAirport2[6],$scope.selectedAirport2[7]).toFixed(2);
    }


    function distance(lat1, lon1, lat2, lon2) {
          var radlat1 = Math.PI * lat1/180;
          var radlat2 = Math.PI * lat2/180;
          var radlon1 = Math.PI * lon1/180;
          var radlon2 = Math.PI * lon2/180;
          var theta = lon1-lon2;
          var radtheta = Math.PI * theta/180;
          var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

          dist = Math.acos(dist);

          dist = dist * 180/Math.PI;

          dist = dist * 60 * 1.1515;


          dist = dist * 0.8684;

          return dist;

        }
      }
    
  }
}());
