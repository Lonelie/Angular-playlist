'use strict';

angular.module('playlistAngularApp')
  .controller('SongsbyplaylistidCtrl', function ($scope, Song) {
    $scope.addSong= function () {
        Song.addSong($scope.song);
        $scope.song={};
        //$scope.myForm.$setPristine();
        //$location.path('/liste');
    };
    $scope.songs=Song.getSongs();
    Song.loadSongs().success(function(){
        $scope.songs = Song.getSongs();
    });
  });
