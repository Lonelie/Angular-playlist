'use strict';

angular.module('playlistAngularApp')
  .directive('dirListPlaylist', function () {
    return {
      templateUrl: 'views/dirListPlaylist.html',
      restrict: 'E',
      //link: function postLink(scope, element, attrs) {
        //element.text('this is the dirListPlaylist directive');
      //}
    };
  });
