$(function(){

$("div").on("click", function(event) {
    var x = event.pageX;
    var y = event.pageY;

    $("img").css({
        left: x - 45 + "px",
        top: y - 45 + "px"
    })
})

});