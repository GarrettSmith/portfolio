define(
  ['angular'],
  function(angular) {
    'use strict';

    angular
      .module('portfolio.github-ribbon-directive', [])
      .directive('githubRibbon', [
        '$route',
        function githubRibbon() {
          return {
            restrict: 'E',
            scope: {
              user: '=',
              repo: '=',
              
            },
            link: function(scope, element) {
              scope.$on('$routeChangeSuccess', 
                        function githubRibbon(event, current, previous) {
                          element.text($route.current.title);
                        });
            },
            templateUrl: 'public/template/github-ribbon.html'
          };
        }]);
  }
);
