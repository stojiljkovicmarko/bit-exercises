
function coordinates(event) {
    var img = document.getElementById("soccer-player");
    var x = event.clientX;
    var y = event.clientY;
    img.style.left = x - 45 + "px";
    img.style.top = y - 45 + "px";
}

var img = document.getElementById("soccer-field");
img.addEventListener("click", coordinates);

