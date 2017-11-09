var app = angular.module('SearchApp', []);
app.directive('searchWidget', function(){
   return{
   	restrict : 'E',
   	templateUrl  : 'template/search-widget.html',
   };
});
app.controller('searchController', function($http){
                this.saveQuery = function(query){
                $http({method: 'POST', url: `/SearchQuery`, data: {query} }).then(function(){
           
                    });
                  };
             });