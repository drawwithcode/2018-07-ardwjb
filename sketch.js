var capture;
var mic;
var volhistory = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();
  mic = new p5.AudioIn();
  mic.start();


}

function draw() {


  var vol = mic.getLevel();
  console.log(vol);
  var a = 20000 * vol;




  var myImage = capture.loadPixels();
  image(myImage, 0, 0, 1280, 960);
  noStroke();
  if (a < 20) {
    filter("posterize", 6);

  }
  if (a > 20 && a < 40) {
    filter("posterize", 3);

  }
  if (a > 40) {
    filter("invert");
  }

  fill(255);
  textSize(80);
  textAlign(CENTER);
  text('Please speak loudly', windowWidth / 2, windowHeight / 4);



}
