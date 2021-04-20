//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, comets, asteroids, sun, obstacleSound;
var mercImg, venusImg, earthImg, marsImg, jupiterImg, saturnImg, uranusImg, neptuneImg, cometImg, asteroidImg1, asteroidImg2, sunImg, obSound;

function preload(){
mercImg = loadImage("mercury.jpg");
venusImg = loadImage("venus.jpg");
earthImg = loadImage("earth.jpg")
marsImg = loadImage("mars.jpg");
jupiterImg = loadImage("jupiter.jpg");
saturnImg = loadImage("saturn.jpg");
uranusImg = loadImage("uranus.jpg");
neptuneImg = loadImage("neptune.jpg");
cometImg = loadImage("comets.png");
asteroidImg1 = loadImage("asteroid1.jpg");
asteroidImg2 = loadImage("asteroid2.jpg");
sunImg = loadImage("sun2.jpg");
//obSound = loadSound("sounds/obstacle.wav");
}

function setup() {
	createCanvas(1200, 800);
	sun = createSprite(600,300,20,20);
	sun.addImage("sun",sunImg);
  sun.scale = 0.3;
  
  neptune = createSprite(1150,680,20,20);
  neptune.addImage("neptune",neptuneImg);
  neptune.scale = 0.47;
  uranus = createSprite(1000,680,20,20);
  uranus.addImage("uranus",uranusImg);
  uranus.scale = 0.7;
  saturn = createSprite(830,680,20,20);
  saturn.addImage("saturn",saturnImg);
  saturn.scale = 1.2;
  jupiter = createSprite(630,680,20,20);
  jupiter.addImage("jupiter",jupiterImg);
  jupiter.scale = 1.1;
  mars = createSprite(500,680,20,20);
  mars.addImage("mars",marsImg);
  mars.scale = 0.25;
  earth = createSprite(400,680,20,20);
  earth.addImage("earth",earthImg);
  earth.scale = 0.4;
  venus = createSprite(300,680,20,20);
  venus.addImage("venus",venusImg);
  venus.scale = 0.45;
	mercury = createSprite(200,680,20,20);
  mercury.addImage("mercury",mercImg);
  mercury.scale = 0.25;
	 //Engine.run(engine);
  
}


function draw() {
  background("black");
  ellipseMode(RADIUS);
  fill("black");
  strokeWeight(3);
  stroke("white");
  ellipse(600,300,550,280);
  ellipseMode(RADIUS);
  fill("black");
  strokeWeight(3);
  stroke("white");
  ellipse(600,300,450,210);
  ellipseMode(RADIUS);
  fill("black");
  strokeWeight(3);
  stroke("white");
  ellipse(600,300,370,180);
  ellipseMode(RADIUS);
  fill("black");
  strokeWeight(3);
  stroke("white");
  ellipse(600,300,300,150);
  ellipseMode(RADIUS);
  fill("black");
  strokeWeight(3);
  stroke("white");
  ellipse(600,300,200,110);
  ellipseMode(RADIUS);
  fill("black");
  strokeWeight(3);
  stroke("white");
  ellipse(600,300,150,90);
  ellipseMode(RADIUS);
  fill("black");
  strokeWeight(3);
  stroke("white");
  ellipse(600,300,120,70);
  ellipseMode(RADIUS);
  //fill("black");
  strokeWeight(3);
  stroke("white");
  ellipse(600,300,70,50);
  drawSprites();
 
}

