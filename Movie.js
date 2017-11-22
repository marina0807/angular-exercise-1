app.factory("Movie", function(convert) {
    function Movie(name, director, leng, actors, link) {
        this.name = name;
        this.director = director;
        this.leng = leng;
        this.lengStr =  convert.minhour(this.leng);
        this.actors = actors;
        this.link = link;
    } 
    return Movie; 
});