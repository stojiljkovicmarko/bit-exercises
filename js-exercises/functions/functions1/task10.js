// Write a program that calculates the number of appearances of a letter a in a given string. 
// Modify the program so it calculates the number of both letters a and A.

function appearanceOfLetterInString(string, letter1, letter2) {
    counter = 0;
    for (var i = 0; i < string.length; i++) {
        var currChar = string[i];
        
        if (currChar === letter1 || string[i] === letter2) {
            counter++;
        }
    }
    return counter;
}

var string = "abcABCabcABCabcABC";
var letter1 = "a";
var letter2 = "A";

console.log(appearanceOfLetterInString(string, letter1, letter2));