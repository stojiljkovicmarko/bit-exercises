function greetings() {
    alert("Greetings user");
}

greetings();

function question() {
    var answer = prompt("What is you name?");
    var confirmation = confirm("Submit the name: " + answer);
    if(confirmation) {
        alert("Success!");
    }
}

question();