// Write a program to check if the number is divisible by 3 and 5. If it is, print that number.

// Sample numbers: 15, 12 (check one at the time)
// Output: 15

var x = 15;

if (x % 3 == 0 && x % 5 == 0) {
    console.log(x);
} else {
    console.log("Not divisible by 3 and 5.")
}