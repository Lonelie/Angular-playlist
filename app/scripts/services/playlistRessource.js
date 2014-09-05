'use strict';

angular.module('playlistAngularApp')
  .factory('playlistRessource', function ($ressource) {
    // Service logic
    // ...
    var plRessource = $ressource('mocks/playlists.json', {playlistId:'@id'});
    return plRessource;
  });