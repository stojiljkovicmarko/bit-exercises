// metoda koja mora u konstruktor

function Person(name, sayHi) {
    this.name = name;
    this.sayHi = sayHi;
}

Person.prototype.getFullName = function() {
    return this.name;
}

var newPerson = new Person("Marko", function() { return "Cao"});
var newPerson1 = new Person("Ivan", function() { return "Aloha"});
