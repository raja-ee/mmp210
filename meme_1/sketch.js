/*
    Meme V1 - 02.25.2020
*/

// global scope
var Meme;
var MouseIMG;
var CNTR = 250

function preload() {
	Meme = loadImage("memeBKGD.jpg");
	MouseIMG = loadImage("angrysmiley.png");
}

function setup() {
	createCanvas(500,500); // Canvas was centered in styles.css lines 40-49 from this website: http://fh-potsdam.github.io/steel-ant-input-output/examples/center-canvas/

}

function draw() {
	background('white');

	// Background for the meme on the bottom half of the meme
	image(Meme, 0, 200, 500, 300);

	fill(0);
	noStroke();

	// Lines 30-36 are a very common meme format online
	textAlign(LEFT, CENTER);
	textSize(35);
	textStyle(BOLD);
	textFont('Garamond');
	text('Nobody:', 30, 50);

	text('Memes:', 30, 160);

	// A joke for avid meme searchers
	fill(0);
	textAlign(CENTER);
	textStyle(NORMAL);
	textSize(15);
	text('*insert relatable image*', CNTR, 345)

	// Lines 46-55 is the "Captain Obvious" text for this meme. Line 47 has a color extracted directly from the meme background used in the stroke.
	strokeWeight(5);
	stroke(251, 216, 142);
	textAlign(CENTER);
	textSize(38);
	textStyle(BOLD);
	textFont('Impact');
	text('AH YES, INTELLECTUAL COMEDY', CNTR, 250);

	textSize(50);
	text('SO FUNNY, MUST LAUGH', CNTR, 450)

	// Some icing on top of the cake
	image(MouseIMG, mouseX, mouseY, 125, 86.25)
}