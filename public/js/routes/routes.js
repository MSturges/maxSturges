(function() {
  'use strict';

  angular.module('portfolioSite').config(routesFunction);

  routesFunction.$inject = [
    "$stateProvider",
    "$urlRouterProvider",
    "$locationProvider"
  ]

  function routesFunction($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
    .state('about', {
      url: "/",
      template: "<about-directive></about-directive>"
    })

    .state('writing', {
      url: "/writing",
      template: "<writing-directive></writing-directive>"
    })

    .state('development', {
      url: "/development",
      template: "<development-directive></development-directive>"
    })

    .state('contact', {
      url: "/contact",
      template: "<contact-directive></contact-directive>"
    })

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

  }

}());
