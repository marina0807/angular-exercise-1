var app = angular.module("movieApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "actors.html",
      controller: "actorCtrl"
    })
    .when("/Movies", {
      templateUrl: "movies.html",
      controller: "moviesCtrl"
    })
    .otherwise({
        redirectTo: "/"
      });
});