
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ball = new Paper(700,650,20,20);
   ground = new Ground(width/2, height-35, width,10);
   dustbin1 = new Dustbin(400,650,200,20);
   dustbin2 = new Dustbin(505,585,20,150);
   dustbin3 = new Dustbin(295,585,20,150);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW) {

		Matter.body.applyForce(paper.body,paper.body.position,{x:85, y:-85})
	}
}



