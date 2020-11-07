
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render

var bob1,bob2,bob3,bob4,bob5,floor,bob1Diameter;
var rope1,rope2,rope3,rop4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
    floor=new Floor(570,50,730,20)
	bob1=new Bob(400,450,80) 
	bob2=new Bob(480,450,80) 
	bob3=new Bob(560,450,80) 
	bob4=new Bob(640,450,80) 
  bob5=new Bob(720,450,80)
  bobDiameter=190

  var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	}
  });
  
	rope1=new Rope(bob1.body,floor.body,-bobDiameter,0)
	rope2=new Rope(bob2.body,floor.body,-bobDiameter+80,0)
	rope3=new Rope(bob3.body,floor.body,-bobDiameter+160,0)
	rope4=new Rope(bob4.body,floor.body,-bobDiameter+240,0)
	rope5=new Rope(bob5.body,floor.body,-bobDiameter+320,0)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(125);
  
  drawSprites();
  floor.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



function keyPressed() {
	if(keyCode===32){
	Matter.Body.setPosition(bob1.body, { x: 300, y: 400 });
	}
  }
  