define(
  ['angular'],
  function(angular) {
    'use strict';

    angular
      .module('portfolio.update-title-directive', [])
      .directive('updateTitle', [
        '$route',
        function updateTitle($route) {
          return {
            restrict: 'A',
            link: function(scope, element) {
              scope.$on('$routeChangeSuccess', 
                        function titleUpdate(event, current, previous) {
                          element.text($route.current.title);
                        });
            }
          };
        }]);
  }
);
