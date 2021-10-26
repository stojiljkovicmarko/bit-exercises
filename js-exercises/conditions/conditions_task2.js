// Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
// Sample numbers: -5, -2, -6, 0, -1 
// Output: 0 

var num1 = 15;
var num2 = -2;
var num3 = 34;
var num4 = 0;
var num5 = 123;

var largestNum = num1;

if (num1 > num2) {
    largestNum = num1;
} if (num2 > largestNum) {
    largestNum = num2;
} if (num3 > largestNum) {
    largestNum = num3;
} if (num4 > largestNum) {
    largestNum = num4;
} if (num5 > largestNum) {
    largestNum = num5;
}

console.log("Largest number is: " + largestNum);