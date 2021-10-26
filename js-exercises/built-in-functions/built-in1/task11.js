// Write a function that generates a random integer value between 5 and 20.
// Write a function that generates a random integer value between 50 and 100. 
// Write a function which expects a number and a callback generator function 
// and returns an array of numbers produced by the generator function.   

(function() {
"use strict";

//Math.random() returns floating number between 0 and 1 (0 inclusive, 1 exclusicve)
// random num between 2 values (min, max) {
//     Math.random() * (max - min) + min;
// }

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);    
}

function getArrayOfReturnValues(number, callBackFn, min, max) {
    var array = [];
    for(var i = 0; i < number; i++) {
        array[i] = callBackFn(min, max);
    }
    return array;
}

var number = 10;

console.log(getArrayOfReturnValues(number, getRandomNumber, 50, 100));


})();