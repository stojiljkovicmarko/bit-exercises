// 1. Write a list (array) of products you usually buy in the supermarket. 
// Write a price and name for each product. For example,
// 	[
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]
// 2. Write a function that calculates the total price of your shopping list. 
// 3. Write a function that calculates the average product price of your shopping list. 
//     Print this value with the precision of three decimals. 
// 4. Write a function that prints out the name of the most expensive product on 
//     your shopping list. Write the name in uppercase.

(function () {
    "use strict";

    // Task 1.

    var shoppingList = [
        { name: "apples", price: 100 },
        { name: "milk", price: 80 },
        { name: "bananas", price: 120 },
        { name: "greek yoghurt", price: 75 }
    ];

    // Task 2.

    function totalPrice(array) {
        var totalPrice = 0;
        array.forEach(function (elem) {
            totalPrice += elem.price;
        });

        return totalPrice;

    }

    // Task 3.

    function avgPrice(array) {
        var totPrice = totalPrice(array);
        var numOfProd = array.length;

        return (totPrice / numOfProd).toFixed(3);
    }

    // Task 4.

    function mostExpensiveProd(array) {
        var mostExp = array[0];
        array.forEach(function (elem) {
            if (elem.price > mostExp.price) {
                mostExp = elem;
            }
        });
        return mostExp.name.toUpperCase();
    }

    console.log("Total price: ")
    console.log(totalPrice(shoppingList));
    console.log("Avg price: ")
    console.log(avgPrice(shoppingList));
    console.log("Most expensive: ")
    console.log(mostExpensiveProd(shoppingList));

})();