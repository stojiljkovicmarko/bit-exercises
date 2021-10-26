// Write a program that concatenates a given string given number of times. 
// For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 

function stringConcatenation(string, number) {
    var newString = "";
    while(number !== 0) {
        newString += string;
        number--;
    }

    // ista iteracija kroz for petlju
    // for (var i = 0; i < number; i++) {
    //     newString += string;
    // }
    
    return newString;
}

var string = "abcX";
var number = 6;
console.log(stringConcatenation(string, number));