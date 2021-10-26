function test1() {
    console.log(location.hostname);
    console.log(navigator.vendor);
    console.log(location.search);
}

//window.test1();

function screenDim() {
    console.log(screen.height);
    console.log(screen.width);
    screen.height = 500;
    screen.width = 500;
    console.log(screen.height);
    console.log(screen.width);
}

//screenDim();

function storageTest() {
    localStorage.setItem("name", "Marko");
    var name = localStorage.getItem("name");
    //removeFromLocalStorage("name");
    console.log("Local: " + name); //ovo ne brise name jer je sacuvan u varijabli name
    console.log("Local 1: " + localStorage.getItem("name")); // ovo brise

    sessionStorage.setItem("name1", name);
    var name1 = sessionStorage.getItem("name1");
    console.log("session: " + name1);
    //clearAll();
    console.log("session1: " + sessionStorage.getItem("name"));
    
}

function readFromStorage() {
    console.log(localStorage.getItem("name"));
    console.log(sessionStorage.getItem("name"));
}

//storageTest();
//readFromStorage();

function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}

function removeFromSessionStorage(key) {
    sessionStorage.removeItem(key);
}

function clearAll() {
    localStorage.clear();
    sessionStorage.clear();
}

// otvaranje novog brauzra

function openGoogle() {
    var win = window.open("https://www.google.com/");

    setTimeout(function() {
        window.close();
    }, 4000);
}

//openGoogle();

function alertPromptConfirm() {
    alert("Hello world");
    var nesto = prompt("neki tekst za prompt");
    console.log(nesto);
    var yesNo = confirm("Nesto se desilo?");
    console.log(yesNo);
    function foo() {
        console.log("foo");
    }
    var fooInterval = setInterval(foo, 2000);
    setTimeout(function() {
        clearInterval(fooInterval);
        console.log("clear");
    }, 6000)
}

alertPromptConfirm();

