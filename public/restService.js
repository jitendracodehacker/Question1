(function(){

angular.module('zipCodeApp')
.factory('zipIface', zipIfaceFactory);

function zipIfaceFactory($http){
  var apiLink= "http://api.zippopotam.us/us/";
   return {
     getCity : function (zipCode){
       var zipUrl = apiLink+zipCode;
       return $http({
         method : 'GET',
         url: 'zipUrl'
       });
     }
     /*,
     getZipCodes : function (cityName, cityState){
       var zipUrl = apiLink+cityState+"/"+cityName;
       return $http({
         method : 'GET',
         url: 'zipUrl'
       });
     };
   }*/
 }
}
});
