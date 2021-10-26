// Write a function that replaces spaces in a string with provided separator. 
// If separator is not provided, use “-” (dash) as the default separator.

//     "My random string", "_" -> "My_random_string"
//     "My random string", "+" -> "My+random+string"
//     "My random string" -> "My-random-string"

"use strict";

function replaceSpaceWithGivenSeparator(string, separator) {
    var newString = "";
    for(var i = 0; i < string.length; i++) {
        var currChar = string[i];

        if (separator === undefined) {
            if(currChar === " ") {
                newString += "-";
            } else {
                newString += currChar;
            }
        } else if(currChar === " ") {
            newString += separator;
        } else {
            newString += currChar;
        }

        
    }
    return newString;
}

var string = "My random string";
var separator = "*";

console.log(replaceSpaceWithGivenSeparator(string));
