(function () {
    "use strict";

    var STATUS = {
        ACTIVE: true,
        INACTIVE: false
    }

    function Product(name, price, expDate) {
        this.id = Math.floor(Math.random() * 90000) + 10000;
        // this.id = (function() {
        //     return Math.floor(Math.random() * 90000) + 10000;
        // })();
        this.name = name;
        this.price = price; //price.toFixed(2);
        this.expDate = expDate;

        this.getInfo = function () {
            return this.formatName() +
                this.id + ", " +
                this.name + ", " +
                this.price.toFixed(2);
        }

        this.formatName = function () {
            return this.name[0] + this.name[this.name.length - 1].toUpperCase();
        }

    };

    function ShoppingBag() {
        this.shoppingList = [];

        this.addProduct = function (product) {
            var date = new Date();

            //valid expiration date: month and year, doesnt include days
            if ((product.expDate.getYear() - date.getYear() > 0 || 
            (product.expDate.getYear() - date.getYear() === 0 && product.expDate.getMonth() - date.getMonth() > 0))) {
                this.shoppingList[this.shoppingList.length] = product;
                //this.shoppingList.push(product);
            }
        }

        this.averagePrice = function () {
            if (this.shoppingList.length !== 0) {
                var avg = 0;
                for (var i = 0; i < this.shoppingList.length; i++) {
                    avg += this.shoppingList[i].price;
                }
                return avg /= this.shoppingList.length;
            }

            return "No items";
        }



        this.getMostExpensiveProduct = function () {
            if (this.shoppingList.length !== 0) {
                var mostExpensive = this.shoppingList[0];
                for (var i = 0; i < this.shoppingList.length; i++) {
                    if (mostExpensive.price < this.shoppingList[i].price) {
                        mostExpensive = this.shoppingList[i];
                    }
                }
                return mostExpensive.getInfo();
            }
            return "No items";
        }

        this.totalPrice = function () {
            var total = 0;

            //forEach loop
            for (var i = 0; i < this.shoppingList.length; i++) {
                total += this.shoppingList[i].price;
            }

            return total;
        }

    }

    function PaymentCard(accountBalance, status, validThrough) {
        this.accountBalance = accountBalance.toFixed(2);
        this.status = status;
        this.validThrough = validThrough;
    }

    function checkOutAndBuy(shoppingBag, paymentCard) {
        if(shoppingBag.totalPrice() === 0) {
            return "No items in bag.";
        }

        if (paymentCard.accountBalance >= shoppingBag.totalPrice()) {
            return "Purchase successful";
        }

        return "You need " + (shoppingBag.totalPrice() - paymentCard.accountBalance) + " eur more.";
    }

    var prod1 = new Product("Banana", 2.00, new Date(2022, 4));
    var prod2 = new Product("Kiwi", 2.50, new Date(2021, 4));
    var prod3 = new Product("Choc", 3.00, new Date(2021, 6));

    var bag = new ShoppingBag();
    bag.addProduct(prod1);
    bag.addProduct(prod2);
    bag.addProduct(prod3);

    var card1 = new PaymentCard(5.00, STATUS.ACTIVE, { month: 10, year: 2025 });

    console.log("Average product price: ");
    console.log(bag.averagePrice());
    console.log(prod1.getInfo());
    console.log(prod2.getInfo());
    console.log("-------------");
    console.log("Most expesnive product: ");
    console.log(bag.getMostExpensiveProduct());
    console.log("-------------");
    console.log("Total price: ");
    console.log(bag.totalPrice());
    console.log("-------------");
    console.log("-------------");
    console.log("Funds: ");
    console.log(card1.accountBalance);
    console.log(checkOutAndBuy(bag, card1));


})();