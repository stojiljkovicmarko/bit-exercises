// Write a program to join all elements of the array into 
// a string skipping elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]

"use strict";

function joinElements(array) {
    var string = "";
    for (var i = 0; i < array.length; i++) {
        var currElem = array[i];
        if (isFinite(currElem) && currElem !== null) {
            string += currElem + " - ";
        }
    }
    return string;
}

var array = [NaN, 0, 15, false, -22, '', undefined, 47, null, Infinity];

console.log(joinElements(array));