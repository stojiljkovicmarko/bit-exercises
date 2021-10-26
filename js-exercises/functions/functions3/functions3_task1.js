// Write a program to insert a string within a string at 
// a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

"use strict";

function insertStringAtPosition(string, insert, position) {
    var newString = "";
    if (position === undefined) {
        newString = insert  + " " + string;
    } else {
        for (var i = 0; i < string.length; i++) {
            var currChar = string[i];
            if (position === i) {
                newString = newString + insert + " " + currChar;
            } else {
                newString += currChar;
            }

        }
    }

    return newString;

}

var string = "My random string";
var insert = "JS";
var position = 10;
console.log(insertStringAtPosition(string, insert, position));