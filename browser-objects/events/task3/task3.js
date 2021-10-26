"use strict";

var div = document.getElementById("bg-div");
var mario = document.getElementById("mario-img");
var interval;
var x = 0;

function moveBgImageLeft() {
    div.style.backgroundPositionX = x + "px ";
    x -= 20;
}

function changeImgToGif() {
    mario.src = "mario_running.gif";
}

function changeImgToPng() {
    mario.src = "mario.png";
}

function marioRunning() {
    changeImgToGif();
    interval = setInterval(moveBgImageLeft, 100);
}

document.addEventListener("keydown", event => {
    if (event.code === "Space" && !interval) {
        marioRunning();
    }
})

function stopMarioRunning() {
    changeImgToPng();
    if (interval) {
        clearInterval(interval);
    }
    interval = undefined;
}

document.addEventListener("keydown", event => {
    if (event.code === "ArrowDown") {
        stopMarioRunning();
    }
})

