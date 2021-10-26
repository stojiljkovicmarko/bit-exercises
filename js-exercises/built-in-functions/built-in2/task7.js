// Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"

(function() {
"use strict";

function capitalizeFirstLetter(string) {
    var firstLetter = string.charAt(0).toUpperCase();
    var restOfString = string.slice(1);
    return firstLetter + restOfString;
}


var string = "js string exercises";
console.log(capitalizeFirstLetter(string));

})();