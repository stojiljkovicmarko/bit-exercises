// Task 5. Write a program that compares two numbers and displays the larger. Display the result in the console.

var num1 = 13;
var num2 = 17;

// if (num1 > num2) {
//     console.log(num1);
// } else if (num1 < num2) {
//     console.log(num2);
// } else {
//     console.log("They are equal.");
// }

if (num1 === num2) {
    console.log("Equal");
} else {
    console.log(num1 > num2 ? num1 : num2);
}