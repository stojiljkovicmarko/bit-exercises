// Write a function that creates an object that represents a culinary recipe. 
// Each recipe is described by: name, type of cuisine, 
// complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
// Add a method that prints out all the ingredients necessary for the meal preparation. 
// Add a method that checks if a meal can be prepared for 15 minutes. 
// Add a method that changes the type of cuisine to the given value. 
// Add a method that delete a given ingredient from the list of ingredients. 

"use strict";

(function() {

    function Recipe(name, cuisineType, ingredientList, prepTime, prepInfo) {
        this.name = name;
        this.cuisineType = cuisineType;
        this. ingredientList = ingredientList;
        this.prepTime = prepTime;
        this.prepInfo = prepInfo;

        this.printIngredients = function() {
            for(var i = 0; i < this.ingredientList.length; i++) {
                console.log("Ingredient " + i + ": " + this.ingredientList[i]);
            }
        }

        this.prepTimeUnder15min = function() {
            console.log((this.prepTime < 15) ? "Yes" : "No");
        }

        this.changeCuisineType = function(newType) {
            this.cuisineType = newType;
        }

        this.deleteIngredient = function(ingredientName) {
            for (var i = 0; i < this.ingredientList.length; i++) {
                if(this.ingredientList[i] === ingredientName) {
                    this.ingredientList.splice(i, 1);
                }
            }
        }

    }

    var recipe1 = new Recipe("Musaka", "Greek", ["meat", "potato", "onion"], 60, "Some info about preparation");

    console.log(recipe1);
    recipe1.printIngredients();
    console.log("--------")
    recipe1.changeCuisineType("Serbian");
    console.log(recipe1);
    recipe1.prepTimeUnder15min();
    console.log("-------------");
    recipe1.deleteIngredient("potato");
    recipe1.printIngredients();



})();