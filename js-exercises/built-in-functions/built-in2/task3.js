// Write a function to alphabetize words of a given string. 
// Alphabetizing a string means rearranging the letters so they 
// are sorted from A to Z.
	
// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

(function() {
"use strict";

    function alphabetize(string) {
        var array = string.split(" ");
        array.forEach(function(element, index) {
            array[index] = element.split("").sort().join("");
        });
        
        var alphabetizedString = array.join(" ");
        return alphabetizedString;
    }

    var string = "Republic Of Serbia";
    
    console.log(alphabetize(string));

})();