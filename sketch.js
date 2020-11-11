
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Tree,mango1,mango2,mango3,mango2,mango5,MangoImg;
var Ground;
var Stone,StoneImg,stoneObj;
var boy,boyImg;

function preload(){
  boyImg =loadImage("sprites/boy.png");
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Tree = new tree(100,100,20,50);
	Ground = new ground(100,100,50,10);
    mango1 = new mango(200,200,20);
    mango2 = new mango(250,100,20);
    mango3 = new mango(100,250,20);
    mango4 = new mango(150,150,20);
    mango5 = new mango(175,225,20);
    Stone = new stone(200,200,10,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Tree.display();
  Ground.display();
  mango1.display();
  Stone.display();
detectcollision(stoneObj,mango1);
detectcollision(stoneObj,mango2);
detectcollision(stoneObj,mango3);
detectcollision(stoneObj,mango4);
detectcollision(stoneObj,mango5);

  drawSprites();
 
}

function mouseDragged(){
 
     Matter.Body.setPosition(stone[stone.length-1].body, {x: mouseX , y: mouseY});
     Matter.Body.applyForce(stone[stone.length-1].body,stone[stone.length-1].body.position, {x: 5 , y: -5});
    // birdSelectSound.play();
     return false
  
}
function mouseDragged(){
  if (gameState!=="launched"){
     Matter.Body.setPosition(birds[birds.length-1].body, {x: mouseX , y: mouseY});
     Matter.Body.applyForce(birds[birds.length-1].body,birds[birds.length-1].body.position, {x: 5 , y: -5});
    // birdSelectSound.play();
     return false
  }
}


function mouseReleased(){
  launcherObject.fly();
}
function detectcollision(stone,mango){
mangoBodyPosition=mango.body.position
stoneBodyPosition=stone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stone.r){
  Matter.Body.setStatic(Image.body,false);
}
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
launcherObject.attach(stoneObj.body);
  }
}

