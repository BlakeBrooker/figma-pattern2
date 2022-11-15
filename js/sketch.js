//setup function runs once at  the start
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

//draw function is a continuos loop, runs from the start, at 60fps
function draw() {
    background(220); //light grey background

 
    fill(85, 133, 100);
    square(270, 250, 250);

    fill(105, 235, 208);
    circle(230, 220, 90);

    fill(105, 235, 208);
    circle(550, 520, 90);

    fill(105, 235, 208);
    circle(560, 220, 90);

    fill(105, 235, 208);
    circle(230, 520, 90);

    fill(73, 212, 157);
    square(120, 100, 100);

    fill(73, 212, 157);
    square(580, 100, 100);

    fill(73, 212, 157);
    square(560, 520, 100);

    fill(73, 212, 157);
    square(110, 520, 100);

    fill(105, 235, 208);
    circle(400, 210, 90);

    fill(105, 235, 208);
    circle(400, 550, 90);

    fill(105, 235, 208);
    circle(550, 350, 90);

    fill(105, 235, 208);
    circle(230, 350, 90);


}