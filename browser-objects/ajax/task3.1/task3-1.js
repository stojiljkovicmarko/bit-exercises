var input = $("#input");
var url = "https://api.github.com/users?q=";
var $cardHolder = $(".cardHolder");


$(document).ready(function() {
    onSearch();
})

function onSearch(inputValue) {

    $.ajax({
        url: `${url}${inputValue}`,
        method: "GET"
    }).done(function(response) {
        $cardHolder.html("");

        console.log(response[0]);
        
        response.forEach(function(item) {
            var card = $(`<div class="col-4">
            <div class="card">
            <img src="${item.avatar_url}">
            <div class="card-body">
            <h5 class="card-title"> ${item.login}</h5>
            <a href="${item.html_url}" target="_blank" class="btn btn-primary"> Go to profile </a>
            </div>
            </div>
            </div>`);
            $cardHolder.append(card);
        })
    })

}

function searchHandler(event) {
    if(event.code === 13) {
        var inputValue = input.val();
        input.blur();

        onSearch(inputValue);
    }
    
}

input.on("keydown", searchHandler);