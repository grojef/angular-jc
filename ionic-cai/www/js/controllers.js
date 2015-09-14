angular.module('starter.controllers', ['ionic', 'starter.services'])

  .controller('jcCtrl', function ($scope, jcRace, $location, $stateParams) {
        $scope.raceModel = {};
        var type = $stateParams.type;
        var promise = {};
        if (type == 'over') {
          promise = jcRace.over();
        } else if (type == 'attention') {
          promise = jcRace.attention();
        } else {
          promise = jcRace.current();
        }
        promise.success(function (data) {
          $scope.raceModel = data
        });
        $scope.detail = function (id) {
          $location.path('/basket/' + id);
        }
  })
  .controller('jc.basket.detailCtrl', function ($stateParams, jcRace, $scope) {
    $scope.race = {};
    var promise = jcRace.detail($stateParams.matchId);
    promise.success(function (data) {
      $scope.race = data.race;
    });
  });
