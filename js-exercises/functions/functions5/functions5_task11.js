// Check if a given string is a palindrome (spaces are ignored).
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true

"use strict";

function isPalindrome(string) {
    for(var i = 0, j = string.length-1; i < string.length / 2, j > string.length / 2; i++, j--) {
        while(string[i] === " ") {
            i++;
        }
        while(string[j] === " ") {
            j--;
        }
        if(string[i] !== string[j]) {
            return false;
        }
    }
    return true;
}

var string = "a nut for a jar of tuna";
console.log(isPalindrome(string));