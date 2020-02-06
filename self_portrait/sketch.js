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
	
	// The mouth
	fill(0)
	rect(250, 280, 100, 30, 20);
	triangle(300, 130, 280, 230, 320, 230);
	
	// Part of the frame on my actual glasses
	fill(255);
	circle(265, 160, 10);
	circle(335, 160, 10);
	circle(135, 160, 10);
	circle(465, 160, 10);
	
	// My glasses
	noFill();
	stroke(255, 255, 255);
	circle(200, 160, 150);
	circle(400, 160, 150);
	line(265, 160, 335, 160);

	// My eyebrows
	triangle(265, 80, 135, 100, 275, 100);

	// The mouse pointer, with a color change based on the click of the mouse
	if (mouseIsPressed) {
		fill(0, 255, 0);
	square(mouseX, mouseY, 20, 0, 20, 20, 20);
	} else {
		fill(255);
	square(mouseX, mouseY, 20, 0, 20, 20, 20);
	}
	

}