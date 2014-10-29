define(
  [
    'angular',
  ],
  function(angular) {
    'use strict';

    angular
      .module('portfolio.portfolio-controller', [
      ])
      .controller('PortfolioController', [
        '$scope',
        function PortfolioController($scope) {
          $scope.test = 'Just some info';
        }
      ]);
  }
);
