// Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

"use strict";

function ocurrenceOfLetter(string, letter) {
    var counter = 0;
    for(var i = 0; i < string.length; i++) {
        var currentLetter = string[i];
        if(currentLetter === letter) {
            counter++;
        }
    }
    return counter;
}

var string = "My random string";
var letter = "n";

console.log(ocurrenceOfLetter(string, letter));