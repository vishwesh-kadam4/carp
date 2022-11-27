canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d');

let score1 = 1;
let score2 = 1;


let canvasBgImg = 'canvas.jpg';

let car1Width = 120;
let car1Height = 60;
let car1Img = 'car1.png';
let car1X = 10;
let car1Y = 10;

let car2Width = 120;
let car2Height = 100;
let car2Img = 'car2.jpg';
let car2X = 10;
let car2Y = 60;

function onLoad() {
    canvasBgImgTag = new Image();
    canvasBgImgTag.onload = uploadcanvasBgImg;
    canvasBgImgTag.src = canvasBgImg;    
    
    car1ImgTag = new Image();
    car1ImgTag.onload = uploadcar1Img;
    car1ImgTag.src = car1Img; 
    
    car2ImgTag = new Image();
    car2ImgTag.onload = uploadcar2Img;
    car2ImgTag.src = car2Img;    
}
function uploadcanvasBgImg() {
    ctx.drawImage(canvasBgImgTag, 0, 0, canvas.width, canvas.height)
}
function uploadcar1Img() {
    ctx.drawImage(car1ImgTag, car1X, car1Y, car1Width, car1Height)
}
function uploadcar2Img() {
    ctx.drawImage(car2ImgTag, car2X, car2Y, car2Width, car2Height)
}

window.addEventListener('keydown', keyDown);
function keyDown(e) {
    keyCode = e.keyCode;
    if(keyCode == 38){
        car1Up();
    }
    if(keyCode == 40){
        car1Down();
    }
    if(keyCode == 37){
        car1Left();
    }
    if(keyCode == 39){
        car1Right();
    }
    
    if(keyCode == 87){
        car2Up();
    }
    if(keyCode == 83){
        car2Down();
    }
    if(keyCode == 65){
        car2Left();
    }
    if(keyCode == 68){
        car2Right();
    }
}
function car1Up() {
    if(car1Y >= 20 && car2X !== 670){
        car1Y = car1Y - 20;
        uploadcanvasBgImg();
        uploadcar1Img();
        uploadcar2Img();
    }
}
function car1Down() {
    if(car1Y <= 450 && car2X !== 670){
        car1Y = car1Y + 20;
        uploadcanvasBgImg();
        uploadcar1Img();
        uploadcar2Img();
    }
}

function car1Left() {
    if(car1X >= 20 && car1X !== 670 && car2X !== 670){
        car1X = car1X - 20;
        uploadcanvasBgImg();
        uploadcar1Img();
        uploadcar2Img();
    }
}
function car1Right() {
    if(car1X <= 650 && car2X !== 670){
        car1X = car1X + 20;
        uploadcanvasBgImg();
        uploadcar1Img();
        uploadcar2Img();
        document.getElementById('game-status').innerHTML = score1;
        score1++;
    }
    if(car1X == 670){
        document.getElementById('heading2').style.display = "none";
        document.getElementById('game-status2').style.display = "none";
        document.getElementById('heading').innerHTML = "Game Status: ";
        document.getElementById('game-status').style.cssText = "right: 294px;";
        document.getElementById('game-status').innerHTML = "Car1 Won The Race";
    }
}

function car2Up() {
    if(car2Y >= 20 && car1X !== 670){
        car2Y = car2Y - 20;
        uploadcanvasBgImg();
        uploadcar1Img();
        uploadcar2Img();
    }
}
function car2Down() {
    if(car2Y <= 450 && car1X !== 670){
        car2Y = car2Y + 20;
        uploadcanvasBgImg();
        uploadcar1Img();
        uploadcar2Img();
    }
}

function car2Left() {
    if(car2X >= 20 && car2X !== 670 && car1X !== 670){
        car2X = car2X - 20;
        uploadcanvasBgImg();
        uploadcar1Img();
        uploadcar2Img();
    }
}
function car2Right() {
    if(car2X <= 650 && car1X !== 670){
        car2X = car2X + 20;
        uploadcanvasBgImg();
        uploadcar1Img();
        uploadcar2Img();
        document.getElementById('game-status2').innerHTML = score2;
        score2++;
    }
    if(car2X == 670){
        document.getElementById('heading').innerHTML = "Game Status: ";
        document.getElementById('game-status').style.cssText = "right: 294px;";
        document.getElementById('game-status').innerHTML = "Car2 Won The Race";
        document.getElementById('heading2').style.display = "none";
        document.getElementById('game-status2').style.display = "none";
    }
}