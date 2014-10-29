define(
  ['angular'],
  function(angular) {
    'use strict';

    angular
      .module('portfolio.github-ribbon-directive', [])
      .directive('githubRibbon', [
        function githubRibbon() {
          return {
            restrict: 'E',
            replace: true,
            scope: {
              user: '@',
              repo: '@',
              side: '@',
              color: '@'
            },
            templateUrl: 'public/template/github-ribbon.html',
            link: function(scope) {
              var suffix;
              switch(scope.color) {
                case "red":
                  suffix = "aa0000";
                  break;
                case "green":
                  suffix = "007200";
                  break;
                case "darkblue":
                  suffix = "121621";
                  break;
                case "orange":
                  suffix = "ff7600";
                  break;
                case "gray":
                  suffix = "6d6d6d";
                  break;
                case "white":
                  suffix = "ffffff";
                  break;
              }
              scope.img_src = 
                "https://s3.amazonaws.com/github/ribbons/forkme_" +
                scope.side + "_" + scope.color + "_" + suffix + ".png";

              scope.href = "https://github.com/" + scope.user + "/" + scope.repo;
            }
          };
        }]);
  }
);
