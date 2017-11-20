app.controller("actorCtrl", function($scope) {
    function Actor(firstName, lastName, image, imdoUrl) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.image = image;
        this.imdoUrl = imdoUrl;
    }  
    $scope.actors = [
    new Actor("Gal", "Gadot","https://images-na.ssl-images-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg","http://www.imdb.com/name/nm2933757/?ref_=nv_sr_1"),
    new Actor("Julia", "Roberts", "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzNjU3MDczN15BMl5BanBnXkFtZTYwNzY2Njc4._V1_UX214_CR0,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0000210/?ref_=nv_sr_1"),
    new Actor("Brad", "Pit", "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0000093/?ref_=nv_sr_1"),
    new Actor("Nicol", "Kidman", "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1MjM5NDg4MF5BMl5BanBnXkFtZTcwNDg1OTQ4Nw@@._V1_UY317_CR10,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0000173/?ref_=nv_sr_2"),
    new Actor ("Natalie", "Portman", "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3ODE3Mjg1NV5BMl5BanBnXkFtZTcwNzA4ODcxNA@@._V1_UY317_CR11,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0000204/?ref_=nv_sr_4"),
    new Actor ("Barbara", "Streisand", "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwOTQ3NTg1MF5BMl5BanBnXkFtZTcwMjc4MjQ4OA@@._V1_UY317_CR4,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0000659/?ref_=nv_sr_4")
]; 
$scope.sortBy = function(prop) {
    $scope.orderProp = "firstName";
  } 
});