"use strict";

angular.module("loginForm").component("loginForm", {
  templateUrl: "./modules/login-form/login-form.template.html",
  controller: [
    "$timeout",
    function ($timeout) {
      this.submitting = false;
      this.creds = {};

      this.login = function () {
        this.submitting = true;
        $timeout(
          function () {
            this.submitting = false;
          }.bind(this),
          1000
        );
      };
    },
  ],
});
