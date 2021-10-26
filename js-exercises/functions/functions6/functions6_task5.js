// Write a program that prints a multiplication table for numbers up to 12.

"use strict";

function multiplicationTable(number) {
    for(var i = 1; i <= number; i++) {
        var row = "";
        for (var j = 1; j <= number; j++) {
            row += (i*j + "\t");
        }
        console.log(row);
    }
}

var num = 12;
multiplicationTable(num);