function createSelectTag(options) {
    var dropDownDiv = document.getElementById("drop-down-menu");
    var select = document.createElement("select");
    dropDownDiv.appendChild(select);
    for(var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        var text = document.createTextNode(options[i]);
        console.log(options[i]);
        option.appendChild(text);
        select.appendChild(option);
    }
    
}

createSelectTag(["op1", "op2", "op3"]);