angular.module('portfolio.services', [])

.factory('Projects', function() {

  var projects = [
    { 
      title: 'node.PONG',
      description: 'Multiplayer pong game. Vote your way to victory!',
      github_url: 'GarrettSmith/node.PONG',
      media: [
        'img/ionic.png'
      ]
    },
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
