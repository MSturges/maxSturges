(function() {
  'use strict';

  angular.module('portfolioSite')
  .directive('writingDirective', writingDirective)

  function writingDirective () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '../../templates/writing.html',
      controller: 'WritingController'
    }
  }

}());
