

function formatDate(date) {
    return date.getDate() + "/" +
        (date.getMonth() + 1) + "/" +
        date.getFullYear();
}

function totalMovieTimeInProgram(listOfMovies) {
    var totalTime = 0;
    listOfMovies.forEach(movie => {
        totalTime += movie.movieLength;
    })
    return totalTime;
}

function formatMovieProgram(listOfMovies) {
    var formattedProgram = "";
    listOfMovies.forEach(movie => {
        formattedProgram += "\t" + movie.getData() + "\n";
    })
    return formattedProgram;
}

function has4MoviesOfGenre(movie, listOfMovies) {

    if (listOfMovies.length === 0) return false;

    var genre = movie.genre.name;
    var totalOcurrence = 0;
    for (var i = 0; i < listOfMovies.length; i++) {
        var currMovieGenre = listOfMovies[i].genre.name;
        if (currMovieGenre === genre) {
            totalOcurrence++;
        }
        if (totalOcurrence === 4) {
            return true;
        }
    }
    return false;
}

function countMoviesOnFestival(listOfPrograms) {
    var totalMovies = 0;
    for (var i = 0; i < listOfPrograms.length; i++) {
        var currProgram = listOfPrograms[i];
        for (var j = 0; j < currProgram.listOfMovies.length; j++) {
            totalMovies++;
        }
    }
    return totalMovies;
}

// GENRE CONSTRUCTOR 

function Genre(name) {
    this.name = name;
}

Genre.prototype.getShortName = function () {
    return this.name[0].toUpperCase() + (this.name[this.name.length - 1]).toUpperCase() +
        " (" + this.name + ")";
    
}

// MOVIE CONSTRUCTOR

function Movie(title, genre, movieLength) {
    this.title = title;
    this.genre = genre;
    this.movieLength = movieLength;
}

Movie.prototype.getData = function () {
    return "\t" + this.title + ", " +
        this.movieLength + "min, " +
        this.genre.getShortName();
}

// PROGRAM CONSTRUCTOR

function Program(date) {
    this.id = Math.floor(Math.random() * 10000000);
    this.date = date;
    this.listOfMovies = [];
}

// If program has <= 4 movies of that genre
// it adds that movie to the list
// otherwise it does not add it

Program.prototype.addMovie = function (movie) {
    if (!has4MoviesOfGenre(movie, this.listOfMovies)) {
        this.listOfMovies.push(movie);
    } else {
        console.log("Movie: " + movie.title + " has not been added.\nThere are already 4 movies of that genre.\n")
    }
}

Program.prototype.removeMovie = function (movie) {
    var list = this.listOfMovies;
    for (var i = 0; i < list.length; i++) {
        if (Object.is(list[i], movie)) {
            list.splice(i, 1);
        }
    }
}

Program.prototype.getData = function () {
    return formatDate(this.date) + ", " +
        totalMovieTimeInProgram(this.listOfMovies) + "min\n" +
        formatMovieProgram(this.listOfMovies);
}

Program.prototype.getDataShort = function () {
    return formatDate(this.date) + ", " +
        totalMovieTimeInProgram(this.listOfMovies) + "min\n";
}


