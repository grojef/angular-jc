angular.module('starter.controllers', ['ionic','starter.services'])

.controller('jcCtrl', function($scope,jcRace,$location) {
      $scope.races =jcRace.all.current;
      $scope.detail = function(id){
          $location.path('/basket/'+id);
      }
  })
  .controller('detailCtrl', function($scope,jcRace,$location) {
      console.log('123');
  })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,$ionicLoading,$timeout) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.loading= function () {
    $ionicLoading.show({
      template: '<ion-spinner icon="lines" class="spinner-energized"></ion-spinner>',
      duration:3000
    });
  }
});
