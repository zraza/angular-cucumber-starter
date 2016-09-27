(function() {
  'use strict';

  angular
    .module('interactive')
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
