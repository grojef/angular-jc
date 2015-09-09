angular.module('starter.controllers', ['ionic','starter.services'])

.controller('jc.overCtrl', function($scope,jcRace,$location) {
      $scope.races =jcRace.all.over;
      $scope.detail = function(id){
          $location.path('/basket/'+id);
      }
  })
    .controller('jc.currentCtrl', function($scope,jcRace,$location) {
        $scope.races =jcRace.all.current;
        $scope.detail = function(id){
            $location.path('/basket/'+id);
        }
    })
    .controller('jc.attentionCtrl', function($scope,jcRace,$location) {
        $scope.races =jcRace.all.attention;
        $scope.detail = function(id){
            $location.path('/basket/'+id);
        }
    })
  .controller('jc.basket.detailCtrl', function($stateParams,jcRace,$scope) {
        $scope.race = jcRace.all.current[0];
  });