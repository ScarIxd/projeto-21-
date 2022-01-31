
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ball_options={
	isStatic:false,
	restitution: 0.3,
	frition:0,
	density:1.2
}
var chao , chao_options={
	isStatic: 1
}

var esquerda;
var direita;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ellipseMode(RADIUS)	
	rectMode(CENTER);


    chao = Bodies.rectangle(400,690,800,30,chao_options);	
	World.add(world,chao)

	ball = Bodies.circle(150,680,10,ball_options);
	World.add(world,ball)

	direita = Bodies.rectangle(700,630,5,100,chao_options);	
	World.add(world,direita)

	esquerda = Bodies.rectangle(600,630,5,100,chao_options);	
	World.add(world,esquerda)

	
	Engine.run(engine);
  
}


function draw() {  
  background(0);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,10);
  rect(chao.position.x,chao.position.y,800,30);
  rect(direita.position.x,direita.position.y,5,100);
  rect(esquerda.position.x,esquerda.position.y,5,100);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === ENTER){
		Matter.Body.applyForce(ball,ball.position,{x: 10 , y: -20})
	}

}

