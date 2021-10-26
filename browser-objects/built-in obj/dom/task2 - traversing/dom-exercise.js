function removeClass() {
    var elem = document.getElementsByClassName("active");
    console.log(elem);
    elem[0].classList.remove("active");
}

function addClassToFirstLiOfUl() {
    var ul1 = document.body.firstElementChild.firstElementChild;
    ul1.firstElementChild.className = "active";
}


