// Write a program that displays all the combinations of two numbers 
// between 1 and 7. Don't display two of the same numbers at the same time. 
// Display the number of possible combinations, as well. 
// (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

"use strict";

function displayCombinationOfTwoNumbers(number1, number2) {
    var array = [];
    var combination = [];
    for(var i = number1; i <= number2; i++) {
        for(var j = number1; j <= number2; j++) {
            // if(i === j) {
            //     combination = ["same numbers"];
            //     array[array.length] = combination;
            // }
            if(i !== j) {
                combination = [i, j];
                array[array.length] = combination;
            }
        }
    }
    return array;
}

var number1 = 1;
var number2 = 7;
console.log(displayCombinationOfTwoNumbers(number1, number2));