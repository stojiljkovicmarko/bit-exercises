// Write a function to find the median element of array.

"use strict";

function bubbleSort(array) {
    for (var j = 0; j < array.length; j++) {
        for (var i = 0; i < array.length; i++) {
            var currElem = array[i];
            var nextElem = array[i + 1];
            if (currElem > nextElem) {
                array[i] = nextElem;
                array[i + 1] = currElem;
            }
        }
    }
    return array;
}

function findMedian(array) {
    array = bubbleSort(array);
    var n = array.length;
    var median;
    if(n % 2 === 0) {
        return median = (array[n/2-1] + array[n/2])/2;
    }
    return median = array[parseInt(n/2)];
}

var array = [1, 3, 2, 5, 6, 8, 7, 4, 9];
console.log(bubbleSort(array));
console.log(findMedian(array));