(function() {
  'use strict';

  angular.module('portfolioSite')
  .directive('developmentDirective', developmentDirective)

  function developmentDirective () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '../../templates/development.html',
      controller: 'DevelopmentController'
    }
  }

}());
