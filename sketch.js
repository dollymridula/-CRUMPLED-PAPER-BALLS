
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground,leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(600, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		restitution:0.3,
	}
	ball = Bodies.circle(200,100,20,ball_options);
 	World.add(world,ball);
	
	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	//right = new Ground


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  leftSide.display();
  
}



