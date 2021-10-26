"use strict";


// dolar znak znaci da je to node
//jedan element iz doma

var movies = [];
var programs = [];

var $movieTitle = document.querySelector("#title");
var $movieGenre = document.querySelector("#genre");
var $movieLength = document.querySelector("#movie-length");

var $createMovie = document.querySelector("#create-movie");

var $movieListUl = document.querySelector("#movie-ul-list");

var $errorTitleDisplay = document.querySelector("#error-title");
var $errorLengthDisplay = document.querySelector("#error-length");



var $createProgram = document.querySelector("#create-program");
var $programDate = document.querySelector("#program-date");
var $errorDateDisplay = document.querySelector("#error-date");
var $programListUl = document.querySelector("#program-list-ul");

var $movieListSelect = document.querySelector("#movie-list");
var $programListSelect = document.querySelector("#program-list");
var $addMovieToProgram = document.querySelector("#add-movie");
var $errorMovieSelection = document.querySelector("#error-movie-selection");
var $errorProgramSelection = document.querySelector("#error-program-selection");


function getMovieFormData() {
    return {
        title: $movieTitle.value,
        genre: $movieGenre.value,
        movieLength: parseInt($movieLength.value)
    }
}

function validateMovieForm(movieForm) {
    if (!movieForm.title) {
        $errorTitleDisplay.textContent = "Title is required";
        $errorTitleDisplay.className = "display-element-block error";
        return;
    } else {
        $errorTitleDisplay.className = "display-element-none";
    }

    if (isNaN(movieForm.movieLength)) {
        $errorLengthDisplay.textContent = "Movie length field is required and must be a number.";
        $errorLengthDisplay.className = "display-element-block error";
        return;
    } else {
        $errorLengthDisplay.className = "display-element-none";
    }
    return true;
}

function createMovie(title, genre, movieLength) {
    var genreInstance = new Genre(genre);

    return new Movie(title, genreInstance, movieLength);
}

function renderMovieUI(movies) {
    var list = "";

    movies.forEach(function(movie) {
        list += "<li>" + movie.getData() + "</li>"
    })

    $movieListUl.innerHTML = list;
    
}

function renderMovieSelect(movies) {
    var list = "";

    movies.forEach(function(movie) {
        list += "<option value=\"" + movie.title + "\">" + movie.getData() + "</option>";;
    })
    $movieListSelect.innerHTML = list;
}

function resetMovieForm() {
    $movieTitle.value = "";
    $movieLength.value = "";
}

var onMovieCreate = function () {

    var movieForm = getMovieFormData();

    if (!validateMovieForm(movieForm)) {
        return;
    }

    var movie = createMovie(movieForm.title, movieForm.genre, movieForm.movieLength);
    movies.push(movie);

    renderMovieUI(movies);
    renderMovieSelect(movies);

    resetMovieForm();

};


function validateDate(date) {
    var parsedDate = Date.parse(date);

    if (isNaN(parsedDate)) {
        $errorDateDisplay.textContent = "You must pick a date."
        $errorDateDisplay.className = "display-element-block error";
        return;
    } else {
        $errorDateDisplay.className = "display-element-none";
    }
    return true;
}

function renderProgramUI(programs) {
    var list = "";

    programs.forEach(function(program){
        list += "<li>" + program.getData() + "<button data-id=\"" + program.id + "\" class=\"delete\"> X </button> </li>";
    })

    $programListUl.innerHTML = list;
}

function renderProgramSelect(programs) {
    var list = "";

    programs.forEach(function(program) {
        list += "<option value=\"" + program.id + "\">" + program.getData() + "</option>";
    })

    $programListSelect.innerHTML = list;
}

function resetProgramForm() {
    $programDate.value = "";
}


var onProgramCreate = function () {

    var date = new Date($programDate.value);

    // Date.parse(...some date...) parses string representation of date and returns an integer representing 
    // the number of milliseconds since 1970
    // if it cant parse the supplied date string it will return NaN
    
    if(!validateDate(date)) {
        return;
    }
    
    var programInstance = new Program(date);
    programs.push(programInstance);

    renderProgramUI(programs);
    renderProgramSelect(programs);

    resetProgramForm();
    
};


function getMovieAndProgram() {
    return {
        movieTitle: $movieListSelect.value,
        programId: $programListSelect.value
    }
}

function validateSelectedMovieAndProgram(selectedMovieAndProgram) {
    if (selectedMovieAndProgram.movieTitle === "") {
        $errorMovieSelection.textContent = "You must pick a movie."
        $errorMovieSelection.className = "display-element-block error";
        return;
    } else {
        $errorMovieSelection.className = "display-element-none";
    }

    if (selectedMovieAndProgram.programId === "") {
        $errorProgramSelection.textContent = "You must pick a program."
        $errorProgramSelection.className = "display-element-block error";
        return;
    } else {
        $errorProgramSelection.className = "display-element-none";
    }

    return true;
}

function getMovieObj(movieTitle) {
    var movie;
    movies.forEach(element => {
        if (element.title === movieTitle) {
            movie = element;
        }
    });
    return movie;
}

function getProgramObj(programId) {
    var program;
    console.log(typeof programId);
    programId = parseInt(programId);
    console.log(typeof programId);
    programs.forEach(element => {
        if (element.id === programId) {
            program = element;
        }
    });
    return program;
}


var onAddMovieToProgram = function () {

    var selectedMovieAndProgram = getMovieAndProgram();

    if(!validateSelectedMovieAndProgram(selectedMovieAndProgram)) {
        return;
    }

    var movie = getMovieObj(selectedMovieAndProgram.movieTitle);
    var program = getProgramObj(selectedMovieAndProgram.programId);


    program.addMovie(movie);

    $programListSelect.options[selectedMovieAndProgram.programId].textContent = programs[selectedMovieAndProgram.programId].getDataShort();

};


$createMovie.addEventListener("click", onMovieCreate);
$createProgram.addEventListener("click", onProgramCreate);
$addMovieToProgram.addEventListener("click", onAddMovieToProgram);

