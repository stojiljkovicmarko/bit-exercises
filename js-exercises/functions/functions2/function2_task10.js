// Write a function to get the first n characters and add “...” at the end of newly created string.

"use strict";

function addThreeDots(string, numOfChar) {
    var newString = "";
    if (numOfChar <= string.length || numOfChar < 0) {

        for (var i = 0; i < string.length; i++) {
            if(i === numOfChar) {
                newString += "...";
                break;
            } else {
                newString += string[i];
            }
        }
        return newString;
    }
    return false;
}

var string = "Marko";
var numOfChar = 3;

console.log(addThreeDots(string, numOfChar));