'use strict';

angular.module('playlistAngularApp')
  .value('Page', {
        title:"Valérie",
        getTitle:function(){
            return this.title;
        }
    });
