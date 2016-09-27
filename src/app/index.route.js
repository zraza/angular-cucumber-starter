(function() {
  'use strict';

  angular
    .module('App')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/index.tpl.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
