var hero = {
    name : "Superman",
    sayName : function() {
        console.log("I am " + this.name + ".")
    }
}

//hero.sayName();

function Hero(occupation, name) {
    this.occupation = occupation;
    this.name = name;
    this.sayName = function() {
        return "Hi, I am " + this.name;
    }
}

var hero = new Hero("Ninja", "Donatelo");
var hero1 = new Hero("Samurai", "Namagashi");
var hero2 = new Hero("Ironman", "Tony");

console.log(hero);
console.log(hero1);
console.log(hero2);
console.log(hero1.sayName());