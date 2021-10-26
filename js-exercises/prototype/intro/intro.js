function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.type = "function";
Person.bla = "blabla";
Person.prototype.sayHello = function() {
    console.log("Hello, I am " + this.name);
}

var pera = new Person("Pera", "Peric");
var marko = new Person("Marko", "Markovic");

console.log(Person.bla);
pera.sayHello();