// Write a JavaScript function that returns a passed 
// string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not 
// included in the passed string.

// “Webmaster” -> “abeemrstw”

(function() {
"use strict";

function orderAlphabetically(string) {
    return string = string.toLowerCase().split("").sort().join("");
}

var string = "Webmaster";

console.log(orderAlphabetically(string));

})();