//Write a program that compares two numbers and display the larger. Result should be displayed in the console.

var num1 = 7;
var num2 = 7;
result = "";

if (num1 > num2) {
    result = num1;
} else if (num2 > num1) {
    result = num2;
} else {
    result = "They are equal.";
}

console.log(result);