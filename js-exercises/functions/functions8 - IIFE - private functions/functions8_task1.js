// Write IIFE that replaces the first and the last element of 
// the given array and prints out its elements. 
// 	Input array: [4, 5, 11, 9]
// 	Output array: [ 9, 5, 11, 4]

"use strict";

var array = [4, 5, 11, 9];

(function() {
    var temp;
    temp = array[0];
    array[0] = array[array.length-1];
    array[array.length-1] = temp;

    console.log(array);
})(array);