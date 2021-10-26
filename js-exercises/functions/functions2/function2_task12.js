// Write a function to calculate how many years there are left until retirement based on the year of birth. 
// Retirement for men is at age of 65 and for women at age of 60. 
// If someone is already retired, a proper message should be displayed.

"use strict";

function yearsToRetirement(yearOfBirth, gender) {
    var currentYear = 2021;
    var age = currentYear - yearOfBirth;
    var yearsToRetirement = 0;
    if(gender === "M" && age >= 65) {
        return "Already retired";
    } 
    if (gender === "M" && age < 65) {
        yearsToRetirement = 65 - age;
    }
    if(gender === "F" && age >= 60) {
        return "Already retired";
    } 
    if (gender === "F" && age < 60) {
        yearsToRetirement = 65 - age;
    }
    return yearsToRetirement;
}

var yearOfBirth = 1961;
var gender = "F";

console.log(yearsToRetirement(yearOfBirth, gender));