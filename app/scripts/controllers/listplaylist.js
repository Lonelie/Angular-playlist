'use strict';

angular.module('playlistAngularApp')
  .controller('ListplaylistCtrl', function ($scope, Playlist, playlistRessource) {
    //LISTE
    //playlist.loadPlaylists().success(function(){
        	$scope.playlists=Playlist.getPlaylists();
    //    });
    
    $scope.playlist=playlistRessource.query(function(){
        var playlist=$scope.playlists[0];
        playlist.$save();
    });  
    
 });
