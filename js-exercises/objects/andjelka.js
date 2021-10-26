// var user = {
//     username: "pera",
//     password: "12345",
//     email: "pera@gmail.com",
//     age: 25,
//     isAdmin: false
// }

// console.log(user);
// //ovaj nacin bolji, zbog restrikcija imenovanja jer u komb
// // sa dot notacijom ima problem
// console.log(user["username"]);
// console.log(typeof user);

// var propertyName = "email";
// console.log(user[propertyName]);

// //objekti su prosirivi i mogu se dodati nova svojstva
// user.address = {
//     street: "Neka ulica",
//     streetNo: 32,
//     city: "Belgrade"
// }

// console.log(user);

// var x = 10;
// var y = '10'; 

// console.log(x == y); // true
// console.log(x === y); // false

// var user1 = {
//     username: "pera",
//     password: "123"
// };

// var user2 = {
//     username: "pera",
//     password: "123"
// };

// console.log(user1 == user2); //false zbog reference

// var user3 = user2;

// console.log(user3 == user2); //ista je referenca

// function change(x) {
//     x += 10;
//     console.log(x);
// }

// var x = 5;
// change(x);
// console.log(x);

// function change(obj) {
//     obj.x += 10;
//     console.log(obj.x);
// }

// var obj = {
//     x : 5
// }

// change(obj);
// console.log(obj);

// function User(username, pass) {
//     //this = {}

//     this.username = username;
//     this.pass = pass;

//     this.changePass = function(newPass) {
//         this.pass = newPass;
//     }

//     //return this;
// }

// var user = new User("pera", "123"); // bez new undefined jer je pozvana kao obicna f-ja
// //bez new, a nema ni return, username i pass su globalne varijable


"use strict"; //javlja gresku ako pokusamo da promenimo writable false
var obj = new Object();

Object.defineProperty(obj, "x", {
    value: 1,
    writable: false, //moze svojstvu x da se menja vrednost
    enumerable: false //ovo znaci da moze da se vidi prilikom ispisa objekta
});

Object.defineProperty(obj, "y", {
    value: 5,
    writable: true, //moze svojstvu x da se menja vrednost
    enumerable: true //ovo znaci da moze dase vidi prilikom ispisa objekta
});

//obj.x = 10;

console.log(obj);

//for in petlja koja iterira kroz obj i cita propertije
for (property in obj) {
    console.log(property, obj[property]);
}

Object.freeze(obj); //nista ne moze da se menja, ni dodavanje, ni menjanje, ni brisanje

