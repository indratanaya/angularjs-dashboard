"use strict";

angular.module("loginForm").factory("$loginForm", [
  "$timeout",
  "$q",
  function ($timeout, $q) {
    const login = function (creds) {
      return $q(function (resolve, reject) {
        $timeout(function () {
          if (creds.username === "admin" && creds.password === "admin") {
            resolve(true);
            return;
          }

          if (creds.username === "error" && creds.password === "error") {
            reject("Something went wrong.");
            return;
          }

          resolve(false);
        }, 1000);
      });
    };

    return {
      login,
    };
  },
]);
