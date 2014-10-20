angular.module('portfolio.services', [])

.factory('Projects', function() {

  var projects = [
    { title: 'node.PONG' },
    { title: 'Super Bridge Bros' },
    { title: 'portfolio' }
  ];

  return {
    all: function() {
      return projects;
    },
    get: function(id) {
      return projects[id];
    }
  }
});
