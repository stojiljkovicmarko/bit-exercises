// Create an object that represents your favourite coffee. 
// Please include coffee name, strength, flavour, milk, sugar, … everything you like!

var coffee = {
    name: "Special coffe",
    strength: 3,
    size: "M",
    milk: true,
    sugar: 2,
    flavour: "caramel",
    getCoffeeStrength: function () {
        var strength = "";
        switch (coffee.strength) {
            case 1:
                strength = "extra light";
                break;
            case 2:
                strength = "light";
                break;
            case 3:
                strength = "medium";
                break;
            case 4:
                strength = "strong";
                break;
            case 5:
                strength = "extra strong";
                break;
            default:
                strength = "medium";
        }
        return strength;
    },
    getMilkInfo: function() {
        return coffee.milk ? "with milk" : "without milk";
    },
    make: function () {
        console.log("Making coffee");
    }
}


console.log(coffee);
coffee.make();
console.log(coffee.getCoffeeStrength());