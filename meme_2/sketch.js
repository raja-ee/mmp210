/*
    Meme V2 - 03.03.2020
*/

//global scope
var Boot1;
var Boot2;
var CNTR = 250;

function preload() {
	Boot1 = loadImage('Boot.png');
	Boot2 = loadImage('Boot.png');
}

function setup() {
	createCanvas(500,500); // Canvas was centered in styles.css lines 40-49 from this website: http://fh-potsdam.github.io/steel-ant-input-output/examples/center-canvas/

}

function draw() {
	background('white');

	fill(0);
	textAlign(CENTER);
	textSize(25);
	textStyle(NORMAL);
	textFont('Garamond');
	text('Steryotypical Weather In New York City', CNTR, 40);

	fill(91,184,255);
	noStroke();
	rect(0, 60, width, 440);

	fill(0);
	rect(160, 300, 30, 110);
	rect(210, 300, 30, 110);

	image(Boot1, 200, 390, 100, 100);
	image(Boot2, 150, 390, 100, 100);

	fill(120,121,120);
	rect(0, 475, width, 25);
}