// Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

"use strict";

function filterFalsyValues(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var currElem = array[i];
        if(currElem) {
            newArray[newArray.length] = currElem;
        }
    }
    return newArray;
}

var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(filterFalsyValues(array));