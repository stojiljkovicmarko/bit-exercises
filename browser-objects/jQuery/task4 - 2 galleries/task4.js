
$(function () {

    var imgArray = ["bart.gif", "bart3.jpg", "bart2.gif"];
    var galleryCapacity = imgArray.length;

    for (var i = 0; i < galleryCapacity; i++) {
        var $img1 = $("<img>");
        var $img2 = $("<img>");

        $(".gallery1").append($img1);
        $($img1).attr("src", imgArray[i]);

        $(".gallery2").append($img2);
        $($img2).attr("src", imgArray[i]);
    }

    $(".gallery1 img:first").toggleClass("red-border");


    function removeBorder(element) {
        element.toggleClass("red-border");
    }

    function addBorder(element) {
        element.toggleClass("red-border");
    }

    function exchangeBorders() {
        var $element = $(".red-border");
        removeBorder($element);
        
        var $parentTag = $element.parent();
        var $sibling = $parentTag.next();
        var $children = $sibling.children();
        var middleElem = ($sibling.length+1)/2;
        var middleImg = $children.eq(middleElem);

        addBorder(middleImg);

    }

    $("#button").on("click", function() {
        exchangeBorders();
    });

    
   
})


