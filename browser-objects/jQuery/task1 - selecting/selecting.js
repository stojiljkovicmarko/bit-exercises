// Create a page that contains navigation (ul element)
// Navigation should contain odd number of elements

// Select the first element of the list and give it a bottom border

// Select all list elements and transform their text to uppercase 

// Select active element of the list and change its font color

// Find the middle one and change its background color



$(function () {
    console.log("Hello, world!");

    var $allLiElements = $("li");

    $("ul").css("border", "2px solid blue");

    $allLiElements.width("350px");

    $("li:first").css("border-bottom", "1px solid black");

    $allLiElements.text(function(index, elem){
        return elem.toUpperCase();
    });

    $("li:even").addClass("active");

    $("li.active").css("color", "salmon");

    var middleElem = ($allLiElements.length+1)/2;

    $allLiElements.eq(middleElem).css("background-color", "yellow");


});
