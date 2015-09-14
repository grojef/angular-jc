// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'],['$httpProvider',function($httpProvider){
  //$httpProvider.defaults.headers.common['userIds'] = 'TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';
 // $httpProvider.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
}])
  .run(function ($ionicPlatform, $rootScope, $ionicLoading, $window) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
      $rootScope.$on('$stateChangeStart',
        function () {
          $ionicLoading.show({
            template: '<ion-spinner icon="ios"></ion-spinner>'
          });
        });
      $rootScope.$on('$stateChangeSuccess',
        function () {
          $ionicLoading.hide();
        });
      $rootScope.back = function () {
        $window.history.back();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider,$httpProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js

    var interceptor = function() {
      return {
        'request': function (req) {
          req.params = req.params || {};
          req.headers.sessionKey = 'afbv';
          return req;
        },
        'requestError': function (reqErr) {
          return reqErr;
        }
      };
    }
    $httpProvider.interceptors.push(interceptor);
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('race', {
        url: '/race',
        abstract: true,
        templateUrl: 'templates/jc-index.html',
      }).state('basket', {
        url: '/basket/:matchId',
        templateUrl: 'templates/basket-detail.html',
        controller: 'jc.basket.detailCtrl'
      }).state('selfCd', {
        url: '/selfCd',
        templateUrl: 'templates/self-cd.html',
      })
      .state('jcRecord', {
        url: '/jcRecord',
        templateUrl: 'templates/jcRecord.html',
      })
      .state('selfJc', {
        url: '/selfJc',
        templateUrl: 'templates/self-jc.html',
      })
      .state('race.type', {
        url: '/:type',
        templateUrl: 'templates/jc-over.html',
        controller: 'jcCtrl'
      });
    $urlRouterProvider.otherwise('/race/current');
  });
