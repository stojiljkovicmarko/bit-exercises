// Write a program that checks if a given number is odd.

function isOddNumber(a) {
    if (a % 2 !== 0) {
        return "The number is odd";
    } 

    return "The number is even";
}

console.log(isOddNumber(-7));