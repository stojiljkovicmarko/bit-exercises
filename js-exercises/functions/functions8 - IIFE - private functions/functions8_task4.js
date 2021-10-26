// Write a function with parameters name and surname that 
// returns a function that suggests an email in the 
// form name.surname@gmail.com. 
// Input: pera peric
// 	Output: pera.peric@gmail.com

"use strict";

var name = "pera";
var surname = "peric";

var result = (function (name, surname){
    return name + "." + surname + "@gmail.com";
})(name, surname);

console.log(result);