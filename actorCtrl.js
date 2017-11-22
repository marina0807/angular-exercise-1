app.controller("actorCtrl", function($scope, $http, Actor) {
    
  
$scope.actors = [];

  $http.get("actors.json").then(function mySuccess(response) {
    for (var i = 0; i < response.data.length; i++) {
      $scope.actors.push(new Actor(response.data[i].firstName, response.data[i].lastName, 
        response.data[i].image, response.data[i].imdoUrl))  
    }
    
  }, function myError(response) {
    alert("error" + JSON.stringify(response.status));
  })
$scope.sortBy = function(prop) {
    $scope.orderProp = "firstName";
  } 
});