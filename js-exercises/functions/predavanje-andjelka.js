var isValidUsername = function(username) {
    return username.length > 5;
};

var isValidPassword = function(password) {
    return password.indexOf("*") != -1;
};

var checkUser = function(userdata, validator) {
    return validator(userdata);
};

var username = "pera";
var password = "abc*";


console.log(checkUser(username, isValidUsername));
console.log(checkUser(password, isValidPassword));