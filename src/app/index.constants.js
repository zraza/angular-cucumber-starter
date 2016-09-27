/* global moment:false _:false */
(function() {
  'use strict';

  angular
    .module('App')
    .constant('moment', moment)
    .constant('_', _)
    .constant('GLOBALS', {
      API_BASE: ''
    });

})();
