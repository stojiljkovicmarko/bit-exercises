// Write IIFE that replaces all appearances of the letters 
// m or M with * and returns the number of replacements. 
// 	Input: prograMming
// 	Output: progra**ing, 2

"use strict";

var string = "prograMming";

(function(string) {
    var newString = "";
    for(var i = 0; i < string.length; i++) {
        var currLetter = string[i];
        if(currLetter === "M" || currLetter === "m") {
            currLetter = "*";
            newString +=currLetter;
        } else {
            newString += currLetter;
        }
        
    }
    console.log(newString);
})(string);