// Write a function that finds all the elements in a given 
// array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]
// Write a function that finds all the elements in a given array 
// that start with the “pro” substring. The function should be case insensitive. 
// 	Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// 	Output: [’Programming’, ‘product’]

(function(){
"use strict";

    function findWordsWithSubstring(array, substring) {
        var newArray = [];
        array.forEach(element => {
            var currWordMinuscule = element.toLowerCase();
            //moze sa startWith() funkcija
            if(currWordMinuscule.substring(0,3) === substring) {
                newArray.push(element);
            }
        });
        return newArray;
    }

    var arr = ["JavaScript", "Programming", "fun", "product"];

    console.log(findWordsWithSubstring(arr, "pro"));


})();