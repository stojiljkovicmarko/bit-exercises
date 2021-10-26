// Write a function to humanize a number (formats a number to a human-readable string) 
// with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th

"use strict";

// function humanizeNumber(number) {
//     var humanizedNo = "";
//     if (number === 1) {
//         humanizedNo = number + "st";
//     } else if (number === 2) {
//         humanizedNo = number + "nd";
//     } else if (number === 3) {
//         humanizedNo = number + "rd";
//     } else {
//         humanizedNo = number + "th";
//     }
//     return humanizedNo;
// }

function humanizeNumber(number) {
    var humanizedNo = "";
    switch (number) {
        case 1:
            humanizedNo = number + "st";
            break;
        case 2:
            humanizedNo = number + "nd";
            break;
        case 3:
            humanizedNo = number + "rd"
            break;
        default:
            humanizedNo = number + "th";
            break;
    }
    return humanizedNo;
}

var number = 4;

console.log(humanizeNumber(number));