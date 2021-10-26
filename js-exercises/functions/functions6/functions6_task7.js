// Write a function to find the maximum element 
// in array of numbers. Filter out all non-number elements.

"use strict";

function findMaxElemInArray(array) {
    var maxElem = array[0];
    for(var i = 0; i < array.length; i++) {
        var currElem = array[i];
        if(!(isNaN(currElem)) && typeof currElem === "number" && currElem != Infinity) {
            if(currElem > maxElem) {
                maxElem = currElem;
            }
        }
    }
    return maxElem;
}

var array = [12, NaN, null, 5, 24, undefined, "123", +Infinity, 1e3];
console.log(findMaxElemInArray(array));