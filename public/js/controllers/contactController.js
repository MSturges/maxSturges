(function() {
  'use strict';

  angular.module("portfolioSite").controller("ContactController", ContactController)

  ContactController.$inject = [
    '$scope',
    '$log',
    '$http',
    '$state'
  ]

  function ContactController($scope, $log, $http, $state) {
    $scope.test = "contact"

    $scope.sendEmail = function() {
      $http.post('/sendEmail', {email: $scope.email, name: $scope.name, message: $scope.usermail})
      .then(function(response){
        console.log('RESPONSE', response);
        $scope.email = null;
        $scope.name = null;
        $scope.usermail = null;
        $state.go('about');
      })
    }

  }

}());
