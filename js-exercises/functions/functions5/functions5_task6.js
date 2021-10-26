// Write a program that uses a loop to add all the even numbers 
// from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. 
// The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000

"use strict";

function addEvenNumbers(limit) {
    var count = 0;
    for (var i = 0; i <= limit; i++) {
        if (i % 2 === 0) {
            count += i;
        }
    }
    return count;
}

function addOddNumbers(limit) {
    var count = 0;
    for (var i = 0; i <= limit; i++) {
        if (i % 2 !== 0) {
            count += i;
        }
    }
    return count;
}

function multiply(limitEven, limitOdd, multiplication) {
    var sumOfEvenNumbers = addEvenNumbers(limitEven);
    var sumOfOddNumbers = addOddNumbers(limitOdd);
    return ((sumOfEvenNumbers - sumOfOddNumbers)*multiplication);
}

var limitEven = 1000;
var limitOdd = 500;
var multiplication = 12.5;


console.log(multiply(limitEven, limitOdd, multiplication));