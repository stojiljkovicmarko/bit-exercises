// Write a function to find the position of the last occurrence of a character in a string. 
// The result should be in human numeration form. 
// If there are no occurrences of the character, function should return -1.

"use strict";

function positionOfChar(string, char) {
    var position = -1;
    for(var i = string.length-1; i >= 0; i--) {
        var currChar = string[i];
        if(currChar === char) {
            position = i+1;
            break;
        }
    }
    return position;
} 

var string = "Marko";
var char = "M";

console.log(positionOfChar(string, char));