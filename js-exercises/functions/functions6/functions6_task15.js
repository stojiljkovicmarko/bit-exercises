// Write a function that takes a list of strings and prints them,
// one per line, in a rectangular frame.:

// For example the list  gets printed as:
// *********
// * Hello  *
// * World *
// * in    *
// * a     *
// * frame *
// *********

"use strict";

function printRect() {
    var array = ["Hello", "World", "in", "a", "frame"];

    function determineLongestWord() {
        var longest = 1;
        for (var i = 0; i < array.length; i++) {
            if (array[i].length > longest) {
                longest = array[i].length;
            }
        }
        return longest;
    }

    var longestWord = determineLongestWord();
    var matrixX = longestWord + 4;
    var matrixY = array.length + 1;

    for (var i = 0; i <= matrixY; i++) {
        var row = "";
        var currWord = array[i - 1];
        for (var j = 0; j <= matrixX; j++) {
            if (i === 0 || i === matrixY || j === 0 || j === matrixX) {
                row += "*";
            } else if (j === 1 || j === matrixX - 1) {
                row += " ";
            } else if (j === 2) {
                for (var k = 0; k < longestWord; k++) {
                    if(currWord[k] === undefined) {
                        console.log("bla");
                    }
                    row += currWord[k];
                }
                row += " ";
            }
            
        }
        console.log(row);
    }
}

printRect();