// Write a function to find the maximum and minimum elements. Function returns an array.

"use strict";

function findMinAndMaxInArray(array) {
    var min = Infinity;
    var max = -Infinity;
    var newArray = [];
    var obj = {};
    for(var i = 0; i < array.length; i++) {
        var currElem = array[i];
        if(currElem < min) {
            min = currElem;
        }
        if(currElem > max) {
            max = currElem;
        }
    }
    //return newArray = [min, max];
    return obj = {"min" : min, "max" : max};
}

var array = [24, 24, 1, 3, 4, 12, 1, 0, 15, -13, 24];
console.log(findMinAndMaxInArray(array));