// Find the min and max element in the following array and switch their places. 
// Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

"use strict";


function findMin(array) {
    var min = array[0]
    var indexOfMin = 0;
    var newArray = [];

    for(var i = 0; i < array.length; i++) {
        if(array[i] < min) {
            min = array[i];
            indexOfMin = i;
        }
    }
    newArray[0] = indexOfMin;
    newArray[1] = min;
    return newArray;
}

function findMax(array) {
    var max = array[0]
    var indexOfMax = 0;
    var newArray = [];

    for(var i = 0; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i];
            indexOfMax = i;
        }
    }
    newArray[0] = indexOfMax;
    newArray[1] = max;
    return newArray;
}

function reverseMinMax(array) {
    var arrayMin = findMin(array);
    var arrayMax = findMax(array);
    console.log(arrayMin);
    console.log(arrayMax);
    array[arrayMin[0]] = arrayMin[1];
    array[arrayMax[0]] = arrayMax[1];
    return array;
}

var array = [ 3, 500, 12, 149, 53, 414, 1, 19 ];

//console.log(findMin(array));
//console.log(findMax(array));
console.log(reverseMinMax(array));