// Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number

"use strict";

function reverseNumber(number) {
    var string = "" + number;
    //console.log(string);
    var newNumber = "";
    for(var i = string.length-1; i >= 0; i--) {
        var currChar = string[i];
        newNumber += currChar;
    }
    return parseInt(newNumber);
}

var number = 12345;

console.log(reverseNumber(number));
console.log(typeof reverseNumber(number))