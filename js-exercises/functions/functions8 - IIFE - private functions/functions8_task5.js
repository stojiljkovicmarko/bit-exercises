// Write a function that returns a function that 
// calculates a decimal value of the given octal number. 
// Input: 034
// Output: 28


//"use strict";
// OCTAL LITERALS ARE NOT ALLOWED IN STRICT MODE

var octalNumber = 034;

var decimalNumber = (function(octalNumber) {
    return parseInt(octalNumber, 10);
})(octalNumber);

console.log(decimalNumber);