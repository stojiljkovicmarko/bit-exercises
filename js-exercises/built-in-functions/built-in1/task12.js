// Write a function that shuffles the elements of a given array. 
// 		Input: [3, 6, 11, 2, 9, 1]
// 		Output: [6, 2, 9, 1, 3, 11]  
//         (it can be any random permutation of the given array)

(function(){
"use strict";

var list = [1, 2, 4, 3, 5, 7, 6, 8, 9];

list = list.sort(function(a, b) {
    return Math.random() - 0.5;
});

console.log(list);

})();