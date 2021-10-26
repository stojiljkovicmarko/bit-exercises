// Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

"use strict";

function findWordInString(string, word) {
    var comparison = 0;
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        var currCharString = string[i];
        if(currCharString === word[0]) {
            for(var j = i; j < i + word.length; j++) {
                if(string[j] === word[j-i]) {
                    comparison++;
                }
                if(comparison === word.length) {
                    count++;
                }
            }
            comparison = 0;
        }
    }
    return "The word was found " + count + " time(s)";
}

var string = 'The quick foxbrown foxfox fox.';
//var string = "aa bb aa cc dd aa aa";

var word = "fox";
//var word = "aa";

console.log(findWordInString(string, word));