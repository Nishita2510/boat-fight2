const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg;
var shark,sharkImg;
var barrel,barrel2,barrelImg;
var ship,shipImg;
var pirate1 ,pirateImg1;
var pirate2,pirateImg2;
var pirate3,pirateImg3;
var pc1,pc1Img;
var pc2,pc2Img;
var replay,replayImg;
var boat1,boat1Img;
var boat2,boat2Img;
var edges,slingShot;
var gameState = "onSling"

function preload(){
bgImg = loadImage("images/ocean.jpg");

replayImg = loadImage("images/replay1.png");
}

function setup() {
  //createEdgeSprite(edges)
  createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(600,height,1500,60);

  //for creating sharks
  shark = new Shark(50, 540, 180, 120);
  
  //to create pirate ship
  ship = new Ship(1000,350,260,100)
  boat2 = new Boat(300,450,150,50)

  //for pirates
  pirate1 = new Pirate(1000,340,80,80);

  //pc 
  tyler = new PC(295,445,90,90);
  ball = new Ball(400,450,20,20);
  ball2 = new Ball(1000,330,20,20);

  ///to create slingshot
  slingShot = new SlingShot(ball.body,{x:400,y:450});

  //to create barrel
  //barrel2 = new Barrel(770,435,150,150)
  //barrel = new Barrel(300,450,150,150)
  // boat1 = new Boat(150,450,100,80)
   //pirate2 = new Pirate(870,315,50,50);
  //pirate3 = new Pirate(890,260,50,50);
}

function draw() {
  background(bgImg);
  Engine.update(engine);

  ground.display();

  ship.display();

  pirate1.display();

  boat2.display();

  tyler.display();

  ball.display();

  //ball2.display()

  slingShot.display();

  shark.display()


  //barrel.display()
 //barrel2.display()
  //pirate2.display();
  //pirate3.display();
// boat1.display();

}

function mouseDragged(){
  if(gameState!=="launched"){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingShot.fly();
  gameState="launched"
 console.log(ball.body.position)
}