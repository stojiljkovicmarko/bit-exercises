// Write a function to find and return the first, middle and last element
//  of an array if the array has odd number of elements. 
//  If number of elements is even, return just the first and the last. 
//  In other cases (empty array), input array should be returned.

"use strict";

function findSomeElements(array) {
    var n = array.length;
    if(n === 0) {
        return array;
    }
    if(n % 2 === 0) {
        return array[0] + " " + array[n-1];
    }
    if (n % 2 !== 0) {
        return array[0] + " " + array[(n-1)/2] + " " + array[n-1];
    }
}

var array = [1, 3, 2, 5, 6, 8, 7, 4];
console.log(findSomeElements(array));