

function getElem() {
    console.log(document.getElementById("naslov"));
}

function addBgColor() {
    var naslov = document.getElementById("naslov");
    naslov.className = "naslov-bg-color";
}

// Create a function that selects the second list and applies
//  a class that sets some background color to it.

function addBgColorToList() {
    var list = document.body.childNodes[5];
    list.className = "list-two";
}

function changeList2BgColor() {
    var list = document.body.childNodes[5];
    list.className = "bg-color-green";
}

// Create a second function that, when triggered, 
// selects all <li> elements on the page. 
// The function also sets a class that sets some bg 
// color to every <li> element.


function setLiBgColor() {
    var list = document.body.children[2].children;
    for(var i = 0; i < list.length; i++) {
        var elem = list[i];
        console.log(elem);
        elem.className = "list-elem-bg-color";
    }
}

// Create one more unordered list and one more function
// The function​ should select only <li> elements from that last list
// Each <li> element should get a class that sets some bg 
//color and transforms the text to uppercase.

function setLiBgColorTextUpperCase() {
    var list = document.body.children[5].children;
    console.log(list);
    for(var i = 0; i < list.length; i++) {
        var elem = list[i];
        elem.className = "list3-elem-bg-color";
        elem.innerHTML = elem.innerHTML.toUpperCase();
    }
}

addBgColor();
addBgColorToList();

