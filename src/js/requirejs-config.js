var requirejsConfig = { // jshint ignore:line
  baseUrl: 'public/',
  paths: {
    'angular': [
      '//ajax.googleapis.com/ajax/libs/angularjs/1.2.21/angular.min',
      'lib/angular/angular'
    ],
    'angular-route': [
      '//ajax.googleapis.com/ajax/libs/angularjs/1.2.21/angular-route.min',
      'lib/angular-route/angular-route.min'
    ]
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular']
    }
  }
};