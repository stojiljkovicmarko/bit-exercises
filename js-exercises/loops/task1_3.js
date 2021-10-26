// Write a program to compute the sum and product of an array of integers.

var array = [2, 1, 3, 4, 5, 6];
var i;
var addition = 0;
var multiplication = 1;


for (i = 0; i < array.length; i++) {
    addition += array[i];
    multiplication *= array[i];
}

console.log("Addition is: " + addition);
console.log("Multiplication is: " + multiplication);