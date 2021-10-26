// Write a program that calculates the greatest common divisor of two integers
//  Note: The greatest common divisor of two non-zero integers is the
//   greatest positive number that divides both numbers with no remainder.
// Input:  192 42 | 81 9
// Output: 6      | 9

"use strict";

function greatestDivisor(number1, number2) {
    var greaterNumber;
    if(number1 > number2) {
        greaterNumber = number1;
    } else {
        greaterNumber = number2;
    }
    for(var i = greaterNumber; greaterNumber > 1; i--) {
        if(number1 % i === 0 && number2 % i === 0) {
            return i;
        }
        
    }
    return 0;
}

var number1 = 42;
var number2 = 42;
var number3 = 9;
var number4 = 81;

console.log(greatestDivisor(number1, number2));
console.log(greatestDivisor(number3, number4));
