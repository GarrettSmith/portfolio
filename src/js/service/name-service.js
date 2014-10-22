define(
  ['angular'],
  function(angular) {
    'use strict';

    angular
      .module('ng-boilerplate.name-service', [])
      .factory('NameService', function() {
        return {
          formatName: function(names) {
            names = names.split(' ');
            angular.forEach(names, function(name, index) {
              names[index] = name.charAt(0).toUpperCase() +
                name.substring(1).toLowerCase();
            });
            return names.join(' ');
          }
        };
      });
  }
);

