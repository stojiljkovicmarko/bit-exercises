// Write a function that adds string to the left or right of 
// string, by replacing it’s characters.

// '0000', ‘123’, 'l' -> 0123 
// '00000000', ‘123’, 'r' -> 12300000

(function () {
    "use strict";

    function addAStringAtSide(string, stringToAdd, side) {
        var newString = "";
        if(side === "l") {
            var placesToMove = string.length - stringToAdd.length;
            newString = string.slice(0, placesToMove) + stringToAdd;
            return newString;
        }

        if(side === "r") {
            newString = stringToAdd + string.slice(stringToAdd.length);
            return newString;
        }
        return "Sides: \n'r' for right \n'l' for left";
    }

    var string = "00000000";
    var stringToAdd = "123";
    var side = "k";

    console.log(addAStringAtSide(string, stringToAdd, side));

})();