/*
    Meme V3 - 03.10.2020
*/

//global scope
var CM1;
var CM2;
var CM3;
var x1 = 100;
var x2 = 499;
var x3 = 250;

function preload() {
	CM1 = loadImage('CM1.jpg');
	CM2 = loadImage('CM2.jpg');
	CM3 = loadImage('CM3.jpg');
}

function setup() {
	createCanvas(500,500); // Canvas was centered in styles.css lines 40-49 from this website: http://fh-potsdam.github.io/steel-ant-input-output/examples/center-canvas/

}

function draw() {
	background('white');

	fill(3, 1, 0);
	noStroke();
	rect(0, 120, width, 380);

	fill(0);
	textAlign(LEFT);
	textSize(22);
	textStyle(NORMAL);
	textFont('Garamond');
	text('*Celebrity posts a picture on Instagram seconds ago*', 15, 40);

	textAlign(LEFT);
	textSize(23);
	textStyle(NORMAL);
	textFont('Garamond');
	text('The Comment Section:', 15, 100);

	// The comments
	image(CM1, x1, 160, 450, 60)
	image(CM2, x2, 260, 450, 60)
	image(CM3, x3, 360, 450, 60)

	if (mouseIsPressed) {
		fill(255);
		textAlign(CENTER);
		textSize(24);
		textStyle(NORMAL);
		textFont('Garamond');
		text('PAUSED', 250, 480);
  } else {
    x1 += 2;
    x2 += 2;
    x3 += 2;
  }
	
	if (x1 > width) {
		x1 = -450;
	}

	if (x2 > width) {
		x2 = -450;
	}

	if (x3 > width) {
		x3 = -450;
	}
}