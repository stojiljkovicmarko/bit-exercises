function takeTextFromLi() {
    var ul = document.querySelectorAll("ul li")[2];
    var firstLi = ul.innerHTML;
    alert(firstLi);
}

takeTextFromLi();

function replaceLiWithText(someText) {
    var ul = document.querySelectorAll("ul li");
    var lastLi = ul[ul.length - 1];
    lastLi.textContent = someText;
}

replaceLiWithText("something else");