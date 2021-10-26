const input = $("input");
const errorElem = $(".alert");
const url = "https://api.github.com/search/users?q=";
const cardHolder = $(".cardHolder");

$(document).ready(function () {
    search("a");
})

function search(inputValue) {
    errorElem.text("");
    $.ajax({
        url: `${url}${inputValue}`,
        method: "GET"
        //success: function() {}
        //error: function() {} 
        //a moze i preko done fail ili da se kao property stave
        //ovo done je onload u ajax obicnom
    }).done(function (response) {
        //prazni kartice prvo
        cardHolder.html("");
        if (response.items.length == 0) {
            errorElem.text("No results");
            return
        }

        response.items.forEach(function (item) {
            var card = $(`<div class="col-4">
            <div class="card">
            <img src="${item.avatar_url}">
            <div class="card-body">
            <h5 class="card-title"> ${item.login}</h5>
            <a href="${item.html_url}" target="_blank" class="btn btn-primary"> Go to profile </a>
            </div>
            </div>
            </div>`);
            cardHolder.append(card);
        })

    }).fail(function () {
        errorElem.text("Network error!");
        errorElem.toggle();
    })
}

function searchHandler(event) {
    if (event.keyCode == 13) {
        var inputValue = input.val();
        input.blur();
        if (!inputValue) {
            errorElem.text("Input is required");
            errorElem.toggle();
            return;
        }

        search(inputValue);
    }
}

function clearInput(event) {
    input.val("");
    errorElem.text("");
    errorElem.css("display", "none");

}

input.on("keydown", searchHandler);
input.on("focus", clearInput);