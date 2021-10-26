// Write a function that filters elements of the given array 
// so that they satisfy a condition given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3] 

"use strict";

function isOdd(number) {
    if(number % 2 === 1) {
        return true;
    }
    return false;
}

function oddNumbersInArray(array) {
    var newArray = [];
    for(var i = 0; i < array.length; i++) {
        var currElem = array[i];
        var oddNumber = isOdd(currElem);
        if(oddNumber) {
            newArray[newArray.length] = currElem;
        }
    }

    return newArray;
}

var array = [2, 8, 11, 4, 9, 3];

console.log(oddNumbersInArray(array));