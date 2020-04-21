/*
    Meme V1 - 02.25.2020
*/

// global scope
var i = -50
var j = -130

function setup() {
	createCanvas(500,500); // Canvas was centered in styles.css lines 40-49 from this website: http://fh-potsdam.github.io/steel-ant-input-output/examples/center-canvas/
}

function draw() {
	background('white');

	if (i < 510) {
		i+=5;
		console.log(i);
	} else if (i = 510) {
		i = -50
	}

	if (j < 510) {
		j+=5;
		console.log(i);
	} else if (j = 510) {
		j = -130
	}


	fill('black');
	for (var x = 5; x < width; x += 50) {
		var size = random(40, 80);
		rect(x, i, 40, size);
		rect(x, j, 40, size);
	}

	if (mouseIsPressed) {
		i = 140
		j = 220
  }

}