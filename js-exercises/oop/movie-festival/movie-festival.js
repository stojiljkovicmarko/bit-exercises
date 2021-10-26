"use strict";

(function () {


    // HELPER FUNCTIONS

    function formatGenreName(name) {
        var formattedName = "";
        formattedName = name[0].toUpperCase() + (name[name.length - 1]).toUpperCase() +
            " (" + name + ")";
        return formattedName;
    }

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

    

    /* GENRE CONSTRUCTOR AND METHODS */
    
    function Genre(name) {
        this.name = name;
    }

    Genre.prototype.getData = function () {
        return formatGenreName(this.name);
    }




    /* MOVIE CONSTRUCTOR AND METHODS */

    function Movie(title, genre, movieLength) {
        this.title = title;
        this.genre = genre;

        // checks if the length property is number
        // if its not a number program will terminate
        if (typeof movieLength !== "number") {
            throw new Error("Movie length property must be represented as a number...");
        } else {
            this.movieLength = movieLength;
        }
    }

    Movie.prototype.getData = function () {
        return "\t" + this.title + ", " +
            this.movieLength + "min, " +
            this.genre.getData();
    }




    /*  PROGRAM CONSTRUCTOR AND METHODS */

    function Program(date) {
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




    /* FESTIVAL CONSTRUCTOR AND METHODS */

    function Festival(name, maxMoviesOnFestival) {
        this.name = name;
        this.listOfPrograms = [];
        this.totalMoviesInAllPrograms = 0;

        //if number of movies to a festival is greater
        // program will not be added
        if (typeof maxMoviesOnFestival === "number") {
            this.maxMoviesOnFestival = maxMoviesOnFestival;
        } else {
            throw new Error("Maximal number of movies for a festival must be number.")
        }
    }

    Festival.prototype.addProgram = function (program) {
        this.totalMoviesInAllPrograms += program.listOfMovies.length;

        if (this.totalMoviesInAllPrograms <= this.maxMoviesOnFestival) {
            this.listOfPrograms.push(program);
        } else {
            console.log("Program for " + formatDate(program.date) + " has not been added, it exceedes festival capacity.");
        }
    }

    Festival.prototype.getData = function () {
        if (this.listOfPrograms.length === 0) {
            return this.name + "\n\tProgram to be announced shortly.";
        } else {
            return this.name + " has " +
                countMoviesOnFestival(this.listOfPrograms) + " movie title(s)\n" +
                formatMovieProgram(this.listOfPrograms);
        }
    }



    /* CREATION FUNCTIONS */

    function createMovie(title, genre, movieLength) {
        return new Movie(title, new Genre(genre), movieLength);
    }

    function createProgram(date) {
        return new Program(date);
    }


    /* CREATION OF OBJECT */

    // create Movies
    //if you pass string for movie length => error
    //program will stop
    try {
        var hp = createMovie("Harry Potter", "Fantasy", 200);
        var lotr = createMovie("Lord of the rings", "Fantasy", 240);
        var sw1 = createMovie("Star wars - Phantom menace", "Science fiction", 180);
        var sw2 = createMovie("Star wars - Attack of the Clones", "Science fiction", 180);
        var sw3 = createMovie("Star wars - Revenge of the Sith", "Science fiction", 180);
        var sw4 = createMovie("Star wars - A new hope", "Science fiction", 180);
        var sw5 = createMovie("Star wars - Empire strikes back", "Science fiction", 180);
        var sw6 = createMovie("Star wars - Return of the jedi", "Science fiction", 180);
    } catch (error) {
        console.log(error.message);
        console.log("The programme has stopped.");
        return;
    }

    // create Date

    var date1 = new Date(2021, 10, 23);

    // create Program and add Movies

    var program1 = createProgram(date1);
    var program2 = createProgram(date1);

    //if you try to add a program which has more movies than allowed for festival
    //that program will not be added

    program1.addMovie(hp);
    program1.addMovie(lotr);
    program1.addMovie(sw1);
    program2.addMovie(sw2);
    program2.addMovie(sw3);
    program2.addMovie(sw4);
    program2.addMovie(sw5);
    //program2.removeMovie(sw5);

    // create Festival and add programs
    //if max number of movies is not number => error

    try {
        var fantasyFestival = new Festival("Fantasy and Sci-fi festival", 6);
    } catch (err) {
        console.log(err.message);
        return;
    }

    fantasyFestival.addProgram(program1);
    fantasyFestival.addProgram(program2);


    // PRINT THE FESTIVAL INFO

    console.log(fantasyFestival.getData());


})();