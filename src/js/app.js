define(
  [
    'angular',
    'angular-route',
    'js/controller/portfolio-controller',
    'js/directive/update-title-directive',
    'js/directive/github-ribbon-directive'
  ],
  function(angular) {
    'use strict';

    angular
      .module('portfolio', [
        'ngRoute',
        'portfolio.portfolio-controller',
        'portfolio.update-title-directive',
        'portfolio.github-ribbon-directive'
      ])
      .config([
        '$routeProvider',
        '$sceProvider',
        '$locationProvider',
        function($routeProvider, $sceProvider, $locationProvider) { // jshint ignore:line
          $routeProvider
            .when('/', {
              controller: 'PortfolioController',
              templateUrl: 'public/template/portfolio.html',
              title: 'The Online Portfolio of Garrett Smith'
            })
            .otherwise({ redirectTo: '/' });

          // Disables Strict Contextual Escaping for IE8 compatibility
          $sceProvider.enabled(false);

//          // Commented out for use on GitHub Pages
//          // Only use html5Mode for modern browsers
//          if (window.history && history.pushState) {
//            $locationProvider.html5Mode(true);
//          }
        }
      ]);
  }
);
