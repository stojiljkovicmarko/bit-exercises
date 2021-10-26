// Task 1. Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
// Sample numbers: 3, -7, 2 
// Output: The sign is - 

var num1 = 3;
var num2 = -7;
var num3 = 2;

if (num1 * num2 * num3 > 0) {
    console.log("The sign is +");
} else if (num1 * num2 * num3 === 0) {
    console.log("The product is 0");
} else {
    console.log("The sign is -");
}

