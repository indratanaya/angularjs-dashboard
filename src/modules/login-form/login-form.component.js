"use strict";

angular.module("loginForm").component("loginForm", {
  templateUrl: "./modules/login-form/login-form.template.html",
  controller: [
    "$location",
    "$loginForm",
    function ($location, $loginForm) {
      this.submitting = false;
      this.creds = {};
      this.errorMessage = undefined;

      this.login = function () {
        this.submitting = true;
        $loginForm
          .login(this.creds)
          .then(
            function (authorized) {
              if (authorized !== true) {
                this.errorMessage = "Username and password do not match!";
                return;
              }
              $location.path("/dashboard");
            }.bind(this)
          )
          .catch(
            function (error) {
              this.errorMessage = error;
            }.bind(this)
          )
          .finally(
            function () {
              this.submitting = false;
            }.bind(this)
          );
      };
    },
  ],
});
