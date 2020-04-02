// Preload, setup, and draw function happens after whatever you wrote in your code
let number = 0;
let xCord = 0;
let yCord = 0;
let img;
let H = 100;
let W = 200;
function preload() {
  // first we preload the image , reassingin a variable to the loadImage("path")
  img = loadImage(
    "mario-bros-pixel-clipart-super-mario-bros-png-download-2476928-pixel-mario-png-880_920.png"
  );
  // load all of resources. Images, sounds whatever
  // preload happens first
  console.log("preload");
}
function setup() {
  //setup happens after preload
  // setup everything you want to happen before the draw

  createCanvas(600, 600);
  console.log("setup");
}

function draw() {
  //load the image(image var, x axis,y axis,width,height)
  clear();
  image(img, xCord, yCord, W, H);
  // rect(mouseX, mouseY, 100, 100);
  if (keyIsDown(40)) {
    yCord += 10;
    console.log("arrow Down");
  }
  if (keyIsDown(38)) {
    yCord -= 10;

    console.log("arrow up");
  }
  if (keyIsDown(39)) {
    xCord += 10;

    console.log("arrow right");
  }
  if (keyIsDown(37)) {
    xCord -= 10;

    console.log("arrow left");
  }
  console.log(mouseIsPressed);
  if (mouseIsPressed) {
    H++;
    W++;
    xCord = mouseX;
    yCord = mouseY;
  } else {
    H--;
    W--;
  }
}

// this function is being called whenever you click in the site
function mouseClicked() {
  //mouseX and mouseY are p5 variables that saves the mouse coordinates
  xCord = mouseX;
  yCord = mouseY;
  console.log(mouseX, mouseY);
}

//keyPressed is a p5 function: whenever you press a key this function is called
/* function keyPressed() {
  //keyCode is a P5 variable
  console.log(keyCode);
  if (keyCode === 40) {
    yCord += 10;

    console.log("arrow Down");
  }
  if (keyCode === 38) {
    yCord -= 10;

    console.log("arrow up");
  }
  if (keyCode === 39) {
    xCord += 10;

    console.log("arrow right");
  }
  if (keyCode === 37) {
    xCord -= 10;

    console.log("arrow left");
  }
} */
/* function test() {
  console.log("test");
}
function test2() {
  console.log("test2");
} */

/* function draw() {
  clear();
  //frameCount is a p5 variable to see the number of loops
  //frameRate(number) set the frameRate() to a specific rate
  frameRate(20);
  console.log(frameRate());

  // this means you are clearing the canva every 60 frames
    if (frameCount % 60 === 0) {
    clear();
  } 
  xCord++;
  
  //draw happens after setup
  //is an infinite loop

  //creating a color variable for later use.
  let c = color(255, 204, 0);

  //number++;

  //rect(x coordinate, y coordinate, width, height) this is to create a rectangle;
  //rect(150, 20, 200, 200);
  //circle(x coordinate, y coordinate, and radius)
  // circle(300, 300, 100);

  // ellipse(x cooordinate, y coordinate,width,height )
  // ellipse(56, 46, 300, 55);
  //line(startin x,starting y, finishing x,finishing y)
  //line(0, 0, 600, 600);
  //console.log(number);

  fill(c); // using the color variable
  stroke(200);
  //push() WHATEVER IS HERE WILL ONLY BE AFFECTED HERE pop()
  push();
  fill("green");
  stroke(10);

  rect(xCord, yCord, 30, 30);

  pop();

  circle(xCord, 200, 50);

  fill("red");
  circle(70, 100, 50);

  fill("purple");
  circle(70, 100, 50);
}
 */
