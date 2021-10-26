// Write a program which prints the elements of the following array as a single string.

// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

var array = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var i;
var string = "";

for (i = 0; i < array.length; i++) {

    string += array[i] + "/";

}

console.log(string);