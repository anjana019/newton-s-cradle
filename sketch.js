var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var roof, bob1, bob2, bob3, bob4, bob5, string1, string2,string3,string4, string5;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;
	roof = new Roof(500,100,500,40);
	bob1 = new Bob(300,300,60);
	bob2 = new Bob(400,300,60);
	bob3 = new Bob(500,300,60);
	bob4 = new Bob(600,300,60);
	bob5 = new Bob(700,300,60);
	string1 = new String(bob1.body, roof.body,-200,0);
	string2 = new String(bob2.body, roof.body,-100,0);
	string3 = new String(bob3.body, roof.body,0,0);
	string4 = new String(bob4.body, roof.body,100,0);
	string5 = new String(bob5.body, roof.body,200,0);
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background("grey");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  drawSprites();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-60});
	}
}