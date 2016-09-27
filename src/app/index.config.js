(function() {
  'use strict';

  angular
    .module('interactive')
    .config(config)
    .config(translationConfig)

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

  function translationConfig($translateProvider) {
    $translateProvider.preferredLanguage('en');
  }

})();
