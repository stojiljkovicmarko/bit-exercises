// Write IIFE that calculates the surface area of 
// the given rectangle with sides a and b. 
// Input: 4 5
// Output: 20 

"use strict";

var result;

(function (a, b) {
    result = a * b;
})(4, 5);

console.log(result);