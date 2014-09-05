'use strict';

angular.module('playlistAngularApp')
  .service('Song', function Song($log, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    var oneSong = {
        id:"",
        title:""
    }
        
    var songs = [];

    // Public API here
    return {
        loadSongs: function(){
            return $http.get("mocks/song.json").success(function(data) {
                    //$scope.status = status;
                    //$scope.data = data;
                    songs=data;
                }).
                error(function(data) {
                    //$scope.data = data || "Request failed";
                   // $scope.status = status;
                   songs=[];
                });
        },
        getSongs: function () {
            $log.warn("JE SUIS DANS getSongs");
            return songs;
        },
        addSong: function (oneSong) {
            $log.warn("JE SUIS DANS addSong");
            songs.push(oneSong);
            $log.warn(oneSong);
        }
    };

  });
