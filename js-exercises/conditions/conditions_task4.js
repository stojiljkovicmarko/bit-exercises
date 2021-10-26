// Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
// Sample input: 10  					Sample input: 7
// Output: 10 / 2 = 5					Output: X

var num = 7;

if (typeof num === "number" && num % 2 == 0) {
    console.log(num + " / " + " 2 = " + num/2);
} else {
    console.log("X");
}