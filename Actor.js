app.factory("Actor", function() {
    function Actor(firstName, lastName, image, imdoUrl) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.image = image;
        this.imdoUrl = imdoUrl;
    }  
    return Actor;
});