// Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

"use strict";

var newArray = (function(array, rotation) {
    var newArray = [];
    for(var i = 0; i < array.length; i++) {
        if(i < rotation) {
            newArray[array.length - rotation  + i] = array[i];
            console.log(array[i]);
        } else {
            newArray[i - rotation] = array[i];
        }
        
    }
    return newArray;
})([1,2,3,4,5,6], 4);

console.log(newArray);