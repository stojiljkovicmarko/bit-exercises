// Write a program that checks if a given number is a three digit long number.

function isThreeDigitsLong(a) {
    if (a >= 100 && a <= 999 || a >= -999 && a <= -100) {
        return "Yes";
    }
    return "No";
}

console.log(isThreeDigitsLong(-23));