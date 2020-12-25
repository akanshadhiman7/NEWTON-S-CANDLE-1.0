const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var hanger;

function preload()
{
	
}

function setup() {
	createCanvas(1000,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hanger = new roof(600,200,500,20);
	bob1= new bob(600,500,50);
	bob2= new bob(700,500,50);
	bob3= new bob(500,500,50);
	bob4= new bob(550,500,50);
	bob5= new bob(650,500,50);


	bob1con=new string(bob1.body,hanger.body,0,0);
	bob2con=new string(bob2.body,hanger.body,100,0);
	bob3con=new string(bob3.body,hanger.body,-100,0);
	bob4con=new string(bob5.body,hanger.body,50,0);
	bob5con=new string(bob4.body,hanger.body,-50,0);

	Engine.run(engine);
  
}


function draw() {
  
  background("grey");

  hanger.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  bob1con.display();
  bob2con.display();
  bob3con.display();
  bob4con.display();
  bob5con.display();


  textSize(20);
  fill("blue");
  text("PREES UP ARROW KEY",600,100,200,100)

  drawSprites();
  //keypressed();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-200,y:0});
	}
}
