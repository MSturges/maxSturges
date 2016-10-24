(function() {
  'use strict';

  angular.module('portfolioSite')
  .directive('contactDirective', contactDirective)

  function contactDirective () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '../../templates/contact.html',
      controller: 'ContactController'
    }
  }

}());
