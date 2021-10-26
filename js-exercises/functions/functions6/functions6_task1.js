// Write a function to count vowels in a provided string. 
// Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 

"use strict";

var count = (
    function(string) {
        var count = 0;
        for(var i = 0; i < string.length; i++) {
            var currChar = string[i];
            if (currChar === "a" || currChar === "e" || currChar === "i" || currChar === "o" || currChar === "u" ||
            currChar === "A" || currChar === "E" || currChar === "I" || currChar === "O" || currChar === "U") {
                count++;
            }
        }
        return count;
    }
)("Neki string u kome se broje vokali.");

console.log(count);
