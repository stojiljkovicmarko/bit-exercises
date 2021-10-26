// Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null] 

"use strict";

function fillArrayWithValue(numberOfElem, value) {
    var array = [];

    for (var i = 0; i < numberOfElem; i++) {
        if(value === undefined) {
            array[array.length] = null;
        } else {
            array[array.length] = value;
        }
    }
    return array;
}

var number = 6;
var value = "none";

console.log(fillArrayWithValue(number, value));