angular.module('portfolio.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('ProjectsCtrl', function($scope, Projects) {
  $scope.projects = Projects.all();
});
