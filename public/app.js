(function(){
  var zipCodeApp = angular.module('zipCodeApp',[ ]);

  zipCodeApp.controller('mainCntrl',['zipIface',function(zipIface){

      $scope.getCity = function(){
        zipIface.getCity($scope.zip_code).then(function(data){
          $scope.fetched_cities = data.places;
        }).catch(function(data){
          //Error handling
        })
      },
      $scope.getzipCodes = function(){
        zipIface.getCity($scope.city_name,$scope.state_name).then(function(data){
          $scope.fetched_codes = data.places;
        }).catch(function(data){
          //Error handling
        })
      };
    }]);
});
