// Define a 10 element array. Take the first two letters from every string 
// (that has at least 2 letters) in the array and create a new string from them. 
// Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

// Output: AnStJoJoDaMa

"use strict";

function take1st2LettersFromArrayElements(array) {
    var newString = "";
    for (var i = 0; i < array.length; i++) {
        var currentString = array[i];
        if (typeof currentString === "string" && currentString.length >= 2) {
            for (var j = 0; j < 2; j++) {
                newString += currentString[j];
            }
        }
    }
    return newString;
}

var array = [ "M", "Anne", 123, undefined, NaN, "Steve", "Joe", "John", "David", "Mark", true, "A" ];
console.log(take1st2LettersFromArrayElements(array));