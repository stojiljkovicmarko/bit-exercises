// Start with a blank HTML page

// Using just JS (jQuery), create an image gallery
// All links to images in the gallery should be elements of the same array!

// When the gallery is created and visible on the page, create gallery title and insert it before the gallery images

// Go through gallery images and set a random size to each gallery image



$(function () {

    var imgArray = ["bart.gif", "bart2.gif", "bart3.jpg",
        "bart.gif", "bart2.gif", "bart3.jpg"];

    var galleryCapacity = imgArray.length;

    for (var i = 0; i < galleryCapacity; i++) {
        var img = $("<img>");
        $("body").append(img);

        $(img).attr("src", imgArray[i]);
    }

    // SOLUTION NUMBER 2 - with 2 iterations
    //after creating img tags, select them and dynamically add
    //attributes to each img from array

    // for (var i = 0; i < 7; i++) {
    //     $("body").append("<img>");
    // }

    // $("img").each(function(index, elem){
    //     $(elem).attr("src", imgArray[index]);
    // })

    var title = $("<h1>Amazing gallery</h1>");

    title.css("text-align", "center");

    $("body:first").before(title);

    $("img").each(function(index, elem) {
        var rand = Math.random() * 250 + 100;
        $(elem).css({
            width: rand,
            height: rand
        })
    })

    $("img").each(function(index, element) {
        var borderedPics = 0;
        if(this.width < 200) {
            $(this).css("border", "6px solid red");
            borderedPics++;
        } else {
            return false;
        }
    })

})();
