
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

	basket1 = new Basket(620, 500, 300, 400);
	ball = new paper();

	
	ground = Bodies.rectangle(400, 650, 800, 20 , {isStatic:true} );
	World.add(world, ground);
	

	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
background('white');
rectMode(CENTER);

rect(ground.position.x, ground.position.y, 800, 20);

  basket1.display();
  ball.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x : 60, y : -90});
	}
}



