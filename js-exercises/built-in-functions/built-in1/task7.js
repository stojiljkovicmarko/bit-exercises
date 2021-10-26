// 1. Write a function that checks if a given string is written in all capitals.
// 2. Write a function that checks if a given string contains any digits.
// 3. Write a function that checks if a given string is a valid hexadecimal color.
// 4. Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
// 5. Write a function named validator that returns an object with properties stringValidator, 
// passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

(function () {
    "use strict";

    // 1. Write a function that checks if a given string is written in all capitals.

    function isAllUpperCase(string) {
        return string === string.toUpperCase();
    }

    // 2. Write a function that checks if a given string contains any digits.

    function hasNumber(string) {
        var array = string.split("");
        for (var i = 0; i < array.length; i++) {
            var currChar = array[i];
            if (isFinite(currChar)) {
                return true;
            }
        }
        return false;
    }

    // 3. Write a function that checks if a given string is a valid hexadecimal color.

    function isLetterAtoF(char) {
        switch (char) {
            case "a":
            case "b":
            case "c":
            case "d":
            case "e":
            case "f":
                return true;
            default:
                return false;
        }
    }

    function isValidHexColor(hex) {
        var arrayOfChars = hex.split("");
        if (arrayOfChars[0] === "#" && arrayOfChars.length === 7) {

            for (var i = 1; i < arrayOfChars.length; i++) {
                var currCharr = arrayOfChars[i];

                if(!isFinite(currCharr) && !isLetterAtoF(currCharr)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    // Task 4. Write a function that checks if a given number belongs to the interval from 1900 to 2018.

    function isNumberBetween1800and2021(number) {
        return (number >= 1800 && number < 2021) ? true : false;
    }

    // Task 5. Write a function named validator that returns an object with properties stringValidator, 
    // passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

    function validator(username, password, color, year) {
        var obj = {};
        obj.stringValidator = isAllUpperCase(username);
        obj.passwordValidator = hasNumber(password);
        obj.colorValidator = isValidHexColor(color);
        obj.yearValidator = isNumberBetween1800and2021(year);
        return obj;
    }


    var username = "ABCABC";
    var password = "abc123";
    var color = "#00ff00";
    var year = 1900;

    // console.log(isAllUpperCase(str));
    // console.log(hasNumber(str));
    //console.log(isValidHexColor("#ab5abc"));
    //console.log(isNumberBetween1800and2021(2020));

    console.log(validator(username, password, color, year));

})();