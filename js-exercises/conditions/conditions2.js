// Write a program to check if the number is divisible by 2. If it is, print even, if not, print odd.
// Sample numbers: 3, 4, 9 (check one at the time)
// Output: odd, even, odd

var num = 9;

if (num % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

(num % 2 === 0) ? console.log("Even") : console.log("Odd");