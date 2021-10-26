// //Prvi primer

// var a = (
//     function() {
//         console.log("boo");

//         return "some value";
//     }

// )();

// console.log(a);

// //Drugi primer

// (function(mood) {
//     console.log("I feel " + mood + " today");
// })("crazy");

// //Treci primer

// var userName = "marko";
// var pass = "123";

// var isUserAuth = ( function(username, pass) {
//     // isValid = validate(username, pass) => true || false;
//     var isValid = true;

//     return isValid;
// })(userName, pass);

// if(isUserAuth) {
//     console.log("Logged in");
// } else {
//     console.log("Wrong credentials");
// }



// var output = toString(0.15);
// console.log(output);

// var toString = function (num) {
//    var result = num + '';
//    return result;
// }


// var output = toString(0.15);
// var toString; //deklaracija se podize zbog hoistinga
// console.log(output);

// toString = function (num) {
//    var result = num + '';
//    return result;
// } //ovo se ne podize gore usled hoistinga
function test() {
    
    function foo() {
        return 2;
    }
    console.log(a);
    console.log(foo());

    var a = 1;

}

test();