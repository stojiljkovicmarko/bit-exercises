// Write a function that accepts a number as a parameter and checks if the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

"use strict";

function isPrimeNumber(number) {
    for (var i = 2; i < number; i++) {
        if(number % i === 0) {
            return false;
        }
    }

    return number > 1;
}                     

var number = 7;

console.log(isPrimeNumber(number));