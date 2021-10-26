

function getInputElements() {
    var getInputElements = document.getElementsByTagName("input");
    return getInputElements;

}

function validateInputElements() {
    var array = getInputElements();
    for (var i = 0; i < array.length; i++) {
        currInputElem = array[i];
        var value = currInputElem.value;
        if (currInputElem.hasAttribute("required") && value === "") {
            currInputElem.style.border = "1px solid red";
            currInputElem.setAttribute("placeholder", "Required field");
        }
    }
}

function resetInputFields() {
    var array = getInputElements();
    for(var i = 0; i < array.length; i++) {
        currInputElem = array[i];
        currInputElem.value = "";
        currInputElem.style.border  = "1px solid gray";
        currInputElem.setAttribute("placeholder", "");
    }
}