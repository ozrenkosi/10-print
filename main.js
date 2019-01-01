let x = 0;
let y = 0;
let spacing = 20;

function setup() {
  createCanvas(500, 600);
  background(0);

  textSize(18);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
}

function draw() {
  if (y < height-100) {
    stroke(map(y, 0, height-100, 0, 255), map(y, 0, height-100, 255, 0), 255);
    strokeWeight(2);
    noFill();
    strokeCap(PROJECT);

    if (random(1) < map(mouseX, 0, width, 0, 1)) {
      line(x, y + spacing, x + spacing, y);
    }
    else {
      line(x, y, x + spacing, y + spacing);
    }

    x = x + spacing;

    if (x >= width) {
      x = 0;
      y = y + spacing;
    }
  }

  fill(0);
  noStroke();
  rectMode(CORNER);
  rect(0, height-100, width, height-100);

  fill(255);
  noStroke();
  rectMode(CORNERS);
  rect(width/2, height-80, width/2+map(mouseX, 0, width, -width/2, width/2), height-60);

  text("Angle bias", width/2, height-30);
}

function mousePressed() {
  background(0);
  x = 0;
  y = 0;
}
