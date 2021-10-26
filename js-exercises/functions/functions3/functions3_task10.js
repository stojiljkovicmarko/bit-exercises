// Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

"use strict";

function mostFrequentItem(array) {
    var maxCount = 1;
    var currCount = 1;
    var item;
    var mostFreqElem;
    for(var i = 0; i < array.length; i++) {
        array[i] = item;
        console.log(item);
        for(var j = 0; j < array.length; j++) {
            if(array[j] === item) {
                currCount++;
            }
            console.log("item: " + item);
            console.log("currCount" + currCount);
        }
        if (currCount > maxCount) {
            maxCount = currCount;
            item = mostFreqElem;
        }
    }
    return mostFreqElem;
}

var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

console.log(mostFrequentItem(array));