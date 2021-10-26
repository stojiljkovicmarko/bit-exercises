function printSomething() {
    var text = "Nesto stampamo i to stampamp u konzoli.";
    console.log(text);
}

printSomething();

function printBrowserInfo() {
    console.log(navigator.platform);
    console.log(navigator.appVersion);
    console.log(navigator.vendor);
}

printBrowserInfo();

function isOnline() {
    if(navigator.isOnline) {
        console.log("We are online.");
    } else {
        console.log("We are offline.");
    }
}

isOnline();

function getScreenDimensions() {
    console.log("Available screen dimension: " + screen.availWidth + " x " + screen.availHeight);
    console.log("Maximum screen size: " + screen.width + " x " + screen.height);
}

getScreenDimensions();

function urlData() {
    console.log("Full url is: " + location.href);
    console.log("Host name is: " + location.hostname);
    console.log("Protocol is: " + location.protocol);
    console.log("Request params: " + location.search);
}

urlData();

function redirectToPage(address) {
    localStorage.assign(address);
}

function storeLocally(key, value) {
    localStorage.setItem(key, value);
}

function getFromLocal(key) {
    
    alert(localStorage.getItem(key));
}

function removeItem(key) {
    localStorage.removeItem(key);
}