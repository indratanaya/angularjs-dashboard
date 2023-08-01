angular.module("app").config([
  "$routeProvider",
  function config($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "./pages/login.page.html",
      })
      .when("/dashboard", {
        templateUrl: "./pages/dashboard.page.html",
      })
      .when("/404", {
        template: "404 - Not Found",
      })
      .otherwise("/404");
  },
]);
