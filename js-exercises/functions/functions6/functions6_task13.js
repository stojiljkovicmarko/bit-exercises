// Write a function to find all the numbers greater than the average.

"use strict";

function avg(array) {
    var n = array.length;
    var avg = 0;
    for(var i = 0; i < n; i++) {
        avg += array[i];
    }
    avg /= n;
    return avg;
}

function findElemAboveAvg(array) {
    var newArr = [];
    var average = avg(array);
    for(var i = 0; i < array.length; i++) {
        if(array[i] > average) {
            newArr[newArr.length] = array[i];
        }
    }
    return newArr;
}

var array = [5, 2, 10, 4, 11, 5, 6, 7];
console.log(findElemAboveAvg(array));