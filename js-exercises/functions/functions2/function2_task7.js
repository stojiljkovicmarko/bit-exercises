// Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]

"use strict";

function stringToArray(string) {
    var array = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            array[i] = null;
        } else {
            array[i] = string[i];
        }

    }
    return array;
}

var string = "My random string";

console.log(stringToArray(string));