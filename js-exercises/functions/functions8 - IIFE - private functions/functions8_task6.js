// Write a function that checks if a given string is valid password. 
// The password is valid if it is at least 6 characters long and 
// contains at least one digit. The function should receive two 
// callbacks named successCallback and errorCallback that should be 
// called in case password is correct or invalid. 
// Input: JSGuru 
// Output: Your password is invalid!

"use strict";

var pass = "JSGuru";

var result = (function (pass) {
    var hasSixChars = false;
    var hasNumber = false;
    if(pass.length >= 6) {
        hasSixChars = true;
    }
    for (var i = 0; i < pass.length; i++) {
        if(!isNaN(parseInt(pass[i]))) {
            hasNumber = true;
            break;
        }
    }
    
    if(hasSixChars && hasNumber) {
        return true;
    } else {
        return false;
    }

})(pass);

console.log(result);