// Write a function to find the position of the first occurrence of a character in a string. 
// The result should be the position of character. 
// If there are no occurrences of the character, the function should return -1.

"use strict";

function positionOfChar(string, char) {
    var position = -1;
    for(var i = 0; i < string.length; i++) {
        var currChar = string[i];
        if(currChar === char) {
            position = i+1;
            break;
        }
    }
    return position;
} 

var string = "Marko";
var char = "r";

console.log(positionOfChar(string, char));