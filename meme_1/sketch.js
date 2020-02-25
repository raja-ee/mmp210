/*
    Meme V1 - 02.25.2020
*/

function setup() {
	createCanvas(500,500); // Canvas was centered in styles.css lines 40-49 from this website: http://fh-potsdam.github.io/steel-ant-input-output/examples/center-canvas/

}

function draw() {
	background('white');

	fill(0);
	noStroke();
	rect(0, 200, 500, 300);

	textAlign(LEFT, CENTER);
	textSize(35);
	textStyle(BOLD);
	textFont('Garamond');
	text('Nobody:', 30, 50);

	text('Memes:', 30, 160);

	fill(255);
	textAlign(CENTER);
	textStyle(NORMAL);
	textSize(15);
	text('*relatable image*', 250, 340)

	textAlign(CENTER);
	textSize(38);
	textStyle(BOLD);
	textFont('Impact');
	text('AH YES, INTELLECTUAL COMEDY', 250, 250);

	textSize(50);
	text('SO FUNNY, MUST LAUGH', 250, 450)
}