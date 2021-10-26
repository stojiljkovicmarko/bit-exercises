// Write a function that creates an object that represents a project. 
// Each project is described by: description,  programming language, 
// git repository, boolean status that says if the project is in development 
// or not. Add a method that prints out the project's repository,  
// a method that checks if the project is written in JavaScript 
// as well as a method that checks if the project is in development or not.

"use strict";

function createObj(desc, lang, git, status) {
    var obj = {};
    obj.description = desc;
    obj.programmingLanguage = lang;
    obj.git = git;
    obj.status1 = status;
    obj.checkStatus = function() {
        return this.status1;
    }
    obj.isJS = function() {
        if(this.programmingLanguage === "JS") {
            return true;
        }
        return false;
    }
    return obj;
}

var object = createObj("Neki desc", "JS", "Yes", true);

console.log(object);
var status = object.checkStatus();
console.log("Status is: " + status);
var lang = object.isJS();
console.log("Is JS: " + lang);