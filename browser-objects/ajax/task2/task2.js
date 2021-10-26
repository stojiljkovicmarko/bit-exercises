// JSON

// Use Dog API
// You can find the documentation for this API at 
// https://dog.ceo/dog-api/
// Check out the documentation to see how to use 
// this API


// Create a function which is sending request via
//  AJAX and getting data in JSON format

// When data is received from the server, extract
//  image url, and use that url to create image 
//  element and add it to html page.

// There is a button on HTML page!
// Each time when user click the button this function 
// for getting image data is invoked and new picture is 
// added to the page.

"use strict";

var $btn = document.querySelector("#btn");
console.log($btn);

var onChangePic = function() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://dog.ceo/api/breeds/image/random", true);
    request.send();

    request.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            var response = JSON.parse(this.response);
            var img = document.querySelector("img");
            img.setAttribute("src", response.message);
            console.log(img);
        }
    }

};

$btn.addEventListener("click", onChangePic);