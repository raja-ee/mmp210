/*
    Meme V3 - 03.10.2020
*/

//global scope
var CM1;
var CM2;
var CM3;

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

	fill(20,21,24);
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

	

}