(function() {
  'use strict';

  angular.module('portfolioSite')
  .directive('aboutDirective', aboutDirective)

  function aboutDirective () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '../../templates/about.html',
      controller: 'AboutController'
    }
  }
  

}());
