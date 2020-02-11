var s = 10;
var y = 0.5;

function setup() {
	createCanvas(640,360);
}

function draw() {
	background('black');
	
	// The eyeballs
	fill(0, 255, 0);
	circle(200, 160, 60);
	circle(400, 160, 60);
	fill(0);
	circle(200, 160, 30);
	circle(400, 160, 30);
	
	// My eyebrows
	fill(0);
	triangle(265, 80, 135, 100, 275, 100); // Left
	triangle(335, 60, 465, 80, 325, 80); // Right

	// The mouth & nose
	fill(0)
	rect(250, 280, 100, 30, 20); // Mouth
	triangle(300, 130, 280, 230, 320, 230); // Nose
	
	// Part of the frame on my actual glasses
	fill(255);
	circle(265, 160, s);
	circle(335, 160, s);
	circle(135, 160, s);
	circle(465, 160, s);
	
	if (s < 20) {
		s+y;
	} else if (s > 10) {
		s-y;
	}

	// My glasses
	noFill();
	stroke(255, 255, 255);
	circle(200, 160, 150); // Left lens
	circle(400, 160, 150); // Right lens
	line(265, 160, 335, 160); // Bridge

	// The mouse pointer, with a color change based on the click of the mouse
	if (mouseIsPressed) {
		fill(0);
	square(mouseX, mouseY, 20, 0, 20, 20, 20);
	} else {
		fill(255);
	square(mouseX, mouseY, 20, 0, 20, 20, 20);
	}
	

}