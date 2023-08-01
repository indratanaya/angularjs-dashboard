"use strict";

angular.module("loginForm", []).component("loginForm", {
  templateUrl: "./modules/login-form/login-form.template.html",
  controller: [
    "$scope",
    "$timeout",
    function ($scope, $timeout) {
      $scope.submitting = false;
      $scope.creds = {};

      $scope.login = function () {
        $scope.submitting = true;
        $timeout(function () {
          $scope.submitting = false;
        }, 1000);
      };
    },
  ],
});
