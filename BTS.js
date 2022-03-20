btsimage = "";
modelstatus = "";

function backbtn() {
    window.location = "home.html";
}

function preload() {
    btsimage = loadImage("BTS.jpeg");
}

function setup() {
    canvas = createCanvas(700, 500);
    canvas.center();
    cocomodel = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("statustag").innerHTML = "Detecting My Bias...";
}

function modelloaded() {
    console.log("model has loaded");
    modelstatus = true;
    cocomodel.detect(btsimage, getreults);
}

function getreults(arrayresults, arrayerror) {

    if (arrayerror) {
        console.error(arrayerror);
    } else {
        console.log(arrayresults);
    }
}

function draw() {
    image(btsimage, 0, 0, 700, 500);
    stroke("blue");
    noFill();
    rect(590, 70, 100, 420);
    stroke("blue");
    fill("blue");
    text("V", 600, 60)
}