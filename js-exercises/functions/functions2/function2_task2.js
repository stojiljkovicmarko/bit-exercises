// Write a function to check whether a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

"use strict";

function isStringBlank(input) {
    if (typeof input === "string" && input === " ") {
        return true;
    }

    return false;
}

var input = false;

console.log(isStringBlank(input));