
function setRandomBgColor() {
    var randomHexColor = Math.floor(Math.random()*16777215).toString(16);
    var div = document.getElementById("div1");
    div.style.backgroundColor = "#" + randomHexColor;
}

var interval;

function intervalBgColorChange() {
    interval = setInterval(setRandomBgColor, 500);
}

function resetBgColor() {
    if(interval) {
        clearInterval(interval);
    }
}

function displayMessages() {
    var text = document.getElementById("message").value;
    //var text = document.querySelector("input").value;
    var parTag = document.createElement("p");
    var textTag = document.createTextNode(text);
    parTag.appendChild(textTag);
    var textArea = document.getElementById("text-area");
    textArea.appendChild(parTag);
    document.getElementById("message").value = "";
}