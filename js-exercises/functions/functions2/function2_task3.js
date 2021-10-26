// Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

"use strict";

function concatString(string, number) {
    var newString = string;
    if (number > 0) {
        newString = "";
        while(number != 0) {
            newString +=string;
            number--;
        }
    }
    return newString;
}

var string = "Ha";
var number = 3;

console.log(concatString(string, number));