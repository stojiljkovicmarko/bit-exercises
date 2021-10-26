// Write a function that takes a number and returns array of its digits.

"use strict";



function numberAsArray(number) {
    var number =  number + "";
    var array = [];
    for(var i = 0; i < number.length; i++) {
        var currDigit = number[i];
        array[array.length] = parseInt(currDigit);
    }
    return array;
}

var number = "1205";
console.log(numberAsArray(number));

// console.log(1203 % 10);
// console.log(120 % 10);
// console.log(12 % 10);
// console.log(1 % 10);

// console.log(parseInt(1203 / 10));
// console.log(parseInt(120 / 10));
// console.log(parseInt(12 / 10));
// console.log(parseInt(10 / 10));
