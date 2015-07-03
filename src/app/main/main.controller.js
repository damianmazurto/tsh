(function() {
  'use strict';

  angular
    .module('tshMoney')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, mainModel) {
    
    'use strict';
    
   

    $scope.tshMoney = new mainModel ;
    $scope.tshMoney.load() ;

   

    $scope.pageChanged = function()
    {
      console.log($scope.tshMoney) ;      
      $scope.tshMoney.load()
    }

    $scope.doSearch = function()
    {
      $scope.tshMoney.query = $scope.query ;
      $scope.tshMoney.rating = $scope.rating ;
      $scope.tshMoney.currentPage = 1 ;

      $scope.tshMoney.load() ; 
    }

    $scope.doReset = function()
    {
      $scope.query = '' ;
      $scope.rating = '' ;

      $scope.doSearch() ;
    }


    $scope.details = function (index) {
        
        $scope.dialog_show = 1 ;
        $scope.index = index ;        
        angular.element('#details').dialog({
        width: 350, autoOpen: false, modal: true}).dialog('open');
        $scope.apply ;
    }


  }
})();
