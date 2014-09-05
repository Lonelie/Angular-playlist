'use strict';

angular
  .module('playlistAngularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/playlist', {
        templateUrl: 'views/playlist.html',
        controller: 'PlaylistCtrl'
      })
      .when('/playlist/:playlistId', {
        templateUrl: 'views/songsByPlaylistId.html',
        controller: 'SongsbyplaylistidCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
