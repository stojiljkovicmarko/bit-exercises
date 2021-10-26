// Write a program that takes a string and prints its 
// characters out in reversed order in the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

"use strict";

function reverseString(string) {
    var newString = "";
    for(var i = string.length-1; i >= 0; i--) {
        var currLetter = string[i];
        newString += currLetter;
    }
    return newString;
}

var string = "Belgrade Institute of Technology";
var reversedString = reverseString(string);
console.log(reversedString);
console.log(reverseString(reversedString));