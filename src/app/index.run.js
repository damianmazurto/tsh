(function() {
  'use strict';

  angular
    .module('tshMoney')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
