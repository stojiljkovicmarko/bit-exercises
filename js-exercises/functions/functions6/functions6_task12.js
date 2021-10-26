// Write a function to find the average of N elements. 
// Make the function flexible to receive dynamic number or parameters.

"use strict";

function avg() {
    var n = arguments.length;
    var avg = 0;
    for(var i = 0; i < n; i++) {
        avg += arguments[i];
    }
    avg /= n;
    return avg;
}

console.log(avg(1, 2, 3, 4, 5, 6));