// Write a function to get the last element of an array. 
// Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]  

"use strict";

function getLastElementsOfArray(array, numberOfElem) {
    var newArray = [];
    var arrayLength = array.length;
    if(numberOfElem === undefined) {
        newArray[0] = array[arrayLength - 1];
    } else {
        var startFromIndex = arrayLength - numberOfElem;    
        for(startFromIndex; startFromIndex < arrayLength; startFromIndex++) {
            var currElem = array[startFromIndex];
            newArray[newArray.length] = currElem;
        }
    }
    return newArray;
}

var array = [7, 9, 0, -2];
var number = 2;

console.log(getLastElementsOfArray(array, number));