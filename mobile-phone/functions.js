var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");
var main = document.getElementsByClassName("main");

var rotateValue = circle.style.transform;
var rotateSum;

function upBtnClick(){
    console.log("Circle = " + circle);
    console.log("UPBUTTON CLICKED!");
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

function downBtnClick(){
    console.log("DOWNBUTTON CLICKED!");
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}