// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

(function(){
    "use strict";

    

    // 1.
    //iteracija dve petlje, uporedjujemo ako postoji taj broj izbrisemo ga iz niza
    //zatim niz sortiramo

    function removeDuplicatesFromArray(array) {
        for(var i = 0; i < array.length; i++) {
            var currElem = array[i];
            for(var j = i+1; j < array.length; j++) {
                if(currElem === array[j]) {
                    array.splice(j, 1);
                }
            }
        }

        array.sort(function(a, b) {
            return a - b;
        });

        return array;

    }

    var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
    console.log(removeDuplicatesFromArray(array));
    

    // 2. 
    //mozemo da koristimo i indexOf da proverimo, mora index + 1 da ne bi brisao taj index, vec naredni

    function removeDuplicates(array) {
        array = array.sort(function(a, b) {
            return a - b;
        });
        console.log(array);

        for(var i = 0; i < array.length; i++) {
            if(array.indexOf(array[i], i + 1) !== -1) {
                array.splice(array.indexOf(array[i]), 1);
                i--;
            }
        }

        return array;
    }

    var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13, 45, 45, 45, 52, 60];
    console.log(removeDuplicates(array));


})();