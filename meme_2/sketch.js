/*
    Meme V2 - 03.03.2020
*/

//global scope
var Boot1;
var Boot2;
var Cap;

function preload() {
	Boot1 = loadImage('Boot.png');
	Boot2 = loadImage('Boot.png');
	Cap = loadImage('BK_Nets_Cap.png');
}

function setup() {
	createCanvas(500,500); // Canvas was centered in styles.css lines 40-49 from this website: http://fh-potsdam.github.io/steel-ant-input-output/examples/center-canvas/

}

function draw() {
	background('white');

if (mouseX > width / 2) {
	
	// Sky
	fill(168, 192, 231);
	noStroke();
	rect(0, 60, width, 440);

	// Sun
	fill(0, 191, 255);
	ellipse(60, 120, 100, 100);

	triangle(10, 120, 60, 220, 110, 120);
	triangle(10, 120, 30, 200, 60, 120);
	triangle(60, 120, 90, 190, 110, 120);

} else {

	// Sky
	fill(91, 184, 255);
	noStroke();
	rect(0, 60, width, 440);

	// Sun
	fill(247, 255, 0);
	ellipse(60, 120, 100, 100);

}
	
	// Text Box
	fill(255);
	stroke(0);
	beginShape();
	vertex(230, 200);
	vertex(250, 170);
	vertex(250, 130);
	vertex(480, 130);
	vertex(480, 170);
	vertex(280, 170);
	vertex(230, 200);
	endShape(CLOSE);

	noStroke();

	// Legs
	fill(201, 137, 62);
	rect(160, 330, 30, 90);
	rect(195, 330, 30, 90);

	// Arms
	rect(125, 230, 30, 110, 10, 0, 10, 10);
	rect(230, 230, 30, 110, 0, 10, 10, 10);

	// Torso
	rect(135, 230, 100, 30);
	rect(160, 230, 65, 100);

	// The Classic Timbs
	image(Boot1, 185, 390, 100, 100);
	image(Boot2, 150, 390, 100, 100);

	// The Head
	ellipse(195, 200, 60, 60);
	// and the Cap
	image(Cap, 145, 150, 82, 60);

	// The Concrete
	fill(120,121,120);
	rect(0, 475, width, 25);

// your HOT or your COLD, yes or your no, your in then your out, your up then your down
if (mouseX > width / 2) {

	// The Jeans
	fill(0, 34, 90);
	beginShape();
	vertex(159, 300);
	vertex(159, 400);
	vertex(192, 400);
	vertex(193, 326);
	vertex(194, 400);
	vertex(226, 400);
	vertex(226, 300);
	vertex(159, 300);
	endShape(CLOSE);

	// Long Sleeve Shirt
	fill(0);
	rect(124, 230, 32, 100, 10, 0, 0, 0);
	rect(230, 230, 32, 100, 0, 10, 0, 0);
	rect(159, 230, 68, 90);
	rect(124, 228, 138, 32, 10, 10, 0, 0);

	// Layer of Snow
	fill(255);
	rect(0, 465, width, 10)

	fill(0);
	textAlign(LEFT);
	textSize(18.5);
	textStyle(NORMAL);
	textFont('Garamond');
	text('Ayo it is mad COLD outside!', 257, 155);
} else {

	// The Short Jeans
	fill(0, 34, 90);
	beginShape();
	vertex(159, 300);
	vertex(159, 370);
	vertex(192, 370);
	vertex(193, 326);
	vertex(194, 370);
	vertex(226, 370);
	vertex(226, 300);
	vertex(159, 300);
	endShape(CLOSE);

	// T-Shirt
	fill(255);
	rect(159, 230, 68, 90);
	rect(124, 228, 138, 32, 10, 10, 0, 0);

	fill(0);
	textAlign(LEFT);
	textSize(18.5);
	textStyle(NORMAL);
	textFont('Garamond');
	text('Ayo it is mad NICE outside!', 257, 155);

}

    fill(255);
    noStroke();
    rect(0, 0, width, 60);

    fill(0);
	textAlign(CENTER);
	textSize(25);
	textStyle(NORMAL);
	textFont('Garamond');
	text('Steryotypical Weather In New York City', 250, 40);


}