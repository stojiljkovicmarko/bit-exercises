// Write a function to find the element that occurs most frequently.

"use strict";

function findMostFreqElem(array) {
    var item;
    var mostFreq = 1;
    var occurence = 0;
    for(var i = 0; i < array.length; i++) {
        for(var j = i; j < array.length; j++) {
            if(array[i] === array[j]) {
                occurence++;
                if(mostFreq < occurence) {
                    mostFreq = occurence;
                    item = array[i];
                }
            }
        }
        occurence = 0;
    }
    return "Most freq elem is: " + item + " (" + mostFreq + " times)";
}

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3, 3, 3, "a", "a"];

console.log(findMostFreqElem(arr1));