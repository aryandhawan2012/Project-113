function preload() {
    img = loadImage('fish.jpg')
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
}

function draw() {
    image(img, 120,12,300, 270);

fill (0,128,0);
stroke(0,128,0);
rect(480,150,83,107)
circle(500,60, 80)
}