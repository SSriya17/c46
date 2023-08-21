let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
  ground = createSprite(100,700,300,60)
  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  if(keyDown(LEFT_ARROW) && lander.x > 0){
    lander.x = lander.x - 4;
  }

  if(keyDown(RIGHT_ARROW) && lander.x < 700){
    lander.x = lander.x + 4;
  }
  //fall down
  vy +=g;
  lander.position.y+=vy;
  lander.collide(ground);
  drawSprites();
}


