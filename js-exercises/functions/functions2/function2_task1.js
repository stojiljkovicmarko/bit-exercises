// Write a function to check whether the `input` is a string or not.

// "My random string" -> true
// 12 -> false

"use strict";

function isString(input) {
    if(typeof input === "string") {
        return true;
    }

    return false;
}

var input = 12;

console.log(isString(input));