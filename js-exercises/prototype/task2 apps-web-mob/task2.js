(function () {
    "use strict";

    function hasLicence(licence) {
        return licence ? "has" : "does not have";
    }

    function enumerateTechnologies(arrayTechs) {
        var formattedString = "\nSupported technologies: ";
        arrayTechs.forEach(element => {
            formattedString += element + ", ";
        });
        return formattedString;
    }

    function isReactBased(array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === "React") {
                return "Yes";
            }
        }
        return "No";
    }

    function enumeratePlatforms(arrayPlatforms) {
        var formattedString = "\nSupported platforms: ";
        arrayPlatforms.forEach(element => {
            formattedString += element + ", ";
        });
        return formattedString;
    }

    function hasAndroidSupport(array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === "Android") {
                return "Yes";
            }
        }
        return "No";
    }


    function App(name, licence, stars) {
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }



    App.prototype.getInfo = function () {
        return this.name + " " +
            hasLicence(this.licence) + " Creative Common licence.\nRating: " +
            this.stars + " stars.";
    }

    App.prototype.isCCLicence = function () {
        return this.licence;
    }

    App.prototype.showStars = function () {
        return this.stars;
    }

    App.prototype.like = function () {
        this.stars++;
    }

    // CREATE WEBAPP CONSTRUCTOR
    // INHERITS METHODS FROM APP

    // METHOD THAT ADDS TECHS AT THE END OF ARRAY
    // TECHS CAN BE OBJECTS

    function WebApp(name, licence, stars, technologies) {
        App.call(this, name, licence, stars);
        this.technologies = technologies;
    }

    WebApp.prototype = Object.create(App.prototype);
    WebApp.prototype.constructor = WebApp;

    WebApp.prototype.getData = function () {
        return this.getInfo() + enumerateTechnologies(this.technologies);
    }

    WebApp.prototype.reactBased = function () {
        return "React based: " + isReactBased(this.technologies);
    }

    WebApp.prototype.addTechnology = function(technology) {
        var arr = this.technologies;
        arr[arr.length] = technology;
    }

    // CREATE MOBILEAPP CONSTRUCTOR
    // INHERIT METHODS

    function MobileApp(name, licence, stars, platforms) {
        App.call(this, name, licence, stars);
        this.platforms = platforms;
    }

    MobileApp.prototype = Object.create(App.prototype);
    MobileApp.prototype.constructor = MobileApp;

    MobileApp.prototype.getData = function() {
        return this.getInfo() + enumeratePlatforms(this.platforms);
    }

    MobileApp.prototype.forAndroid = function() {
        return "Android supported: " + hasAndroidSupport(this.platforms);
    }

    MobileApp.prototype.addPlatform = function(platform) {
        var arr = this.platforms;
        arr[arr.length] = platform;
    }

    // CREATE OBJECTS AND TEST METHODS

    var app = new App("Application", false, 3);
    //console.log(app.getInfo());

    var webApp = new WebApp("WebApp", true, 5, ["one tech", "second tech", "React"]);
    // console.log(webApp.getData());
    // console.log(webApp.reactBased());
    // webApp.addTechnology("neka nova tehn");
    // console.log("-------------");
    // console.log(webApp.getData());
    // console.log(webApp.reactBased());

    var mobApp = new MobileApp("MobApp", false, 8, ["Microsoft", "iOs"]);
    console.log(mobApp.getData());
    console.log(mobApp.forAndroid());
    console.log("-------------");
    mobApp.like();
    mobApp.like();
    console.log(mobApp.getData());
    console.log("-------------");
    mobApp.addPlatform("Android");
    console.log(mobApp.forAndroid());


})();