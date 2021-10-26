// XML

// Use Geolocation API service
// You can find the documentation for this API at  
// https://www.geoplugin.com/webservices/xml

// Check out the documentation to see how to use this API

// Create a function which is sending request via AJAX and 
// getting data in XML format


// When data is received from the server, extract country name 
// which is detected based on IP address, and show it on the screen.

// Extra: 
// There is a button and input field on HTML page!
// Each time user clicks the button, function for getting geolocation 
// data is invoked and new ip address written in input field is used when sending request.



"use strict";

// var $btn = document.querySelector("#btn");
// var $inputText = document.querySelector("#ip");
// var $showGeoLocation = document.querySelector("#location");


// var onFindCity = function() {
//     var ipValue = $inputText.value;
//     var request = new XMLHttpRequest();

//     // request.open("GET", "http://www.geoplugin.net/xml.gp?ip=127.0.0.1:5500", true);
//     //request.open("GET", "http://www.geoplugin.net/xml.gp?ip=89.249.65.28", true);
//     // request.open("GET", "http://www.geoplugin.net/xml.gp?ip=216.58.216.164", true);
//     request.open("GET", "http://www.geoplugin.net/xml.gp?ip=" + ipValue, true);
//     request.send();
    
//     // request.onload = function() {
//     //     var response = request.responseXML;
//     //     console.log(response);
//     // }
    
//     request.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             var response = this.responseXML;
//             //console.log(response);
//             var city = response.querySelector("geoplugin_city");
//             $showGeoLocation.textContent = city.textContent;
//             console.log(city.textContent);
//         }
//     }

// }

// $btn.addEventListener("click", onFindCity);


$(document).ready(function() {

    function onFindCity() {
        var $btn = $("#btn");
        var $inputValue = $("#ip").val();
        console.log($inputValue);

        $.ajax({
            url: "http://www.geoplugin.net/xml.gp?ip=" + $inputValue,
            method: "GET",
        }).done(function(response) {
            var city = response.querySelector("geoplugin_city");
            $("#location").text(city.textContent);
        })
    }

    $($btn).on("click", onFindCity);

})