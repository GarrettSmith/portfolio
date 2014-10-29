(function(requirejs) {
  'use strict';
  requirejs.config(window.requirejsConfig);

  require([
    'angular',
    'js/app'
  ], function (angular) {
    // Needs to be separate from app since we don't want to bootstrap to
    // document when running tests
    angular.bootstrap(document, ['portfolio']);
  });
})(window.requirejs);
