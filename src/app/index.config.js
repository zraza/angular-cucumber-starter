(function() {
  'use strict';

  angular
    .module('App')
    .config(config)
    .config(translationConfig)

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

  function translationConfig($translateProvider) {
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitize');
  }

})();
