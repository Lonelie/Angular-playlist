'use strict';

angular.module('playlistAngularApp')
  .service('Playlist', function Playlist($log, $http) {
    // Service logic
        // ...
        var onePlaylist = {
            id:"",
            title:""
        }
        
        var playlists = [];
        

        // Public API here
        return {
            loadPlaylists: function(){
                return $http.get("https://api.deezer.com/user/2529/playlists").success(function(data) {
                        //$scope.status = status;
                        //$scope.data = data;
                        playlists=data.data;
                    }).
                    error(function(data) {
                        //$scope.data = data || "Request failed";
                       // $scope.status = status;
                       playlists=[];
                    });
            },
            getPlaylists: function () {
                return playlists;
            },
            addPlaylist: function (onePlaylist) {
                $log.warn(onePlaylist);
                playlists.push(onePlaylist);
                $log.warn(playlists[0]);
            }
        };
  });
