const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;
function setup() {
  var canvas = createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(500,480,1000,20);
  ground2 = new Ground(445,330,250,20);
  ground3 = new Ground(780,190,150,20);
  bomb = new Bomb (200,200,30,60);
  slingshot = new Slingshot(bomb.body,{x:140, y:240});
  
  box1 = new Box(350,300,40,60);
  box2 = new Box(390,300,40,60);
  box3 = new Box(420,300,40,60);
  box4 = new Box(460,300,40,60);
  box5 = new Box(500,300,40,60);
  box6 = new Box(540,300,40,60);
  boxPink1 = new Box(365,250,40,60);
  boxPink2 = new Box(405,250,40,60);
  boxPink3 = new Box(445,250,40,60);
  boxPink4 = new Box(485,250,40,60);
  boxPink5 = new Box(525,250,40,60);
  boxBlue1 = new Box(385,150,40,60);
 boxBlue2 = new Box(425,150,40,60);
  boxBlue3 = new Box(465,150,40,60);
  boxGray = new Box(445,100,40,60);
  boxGray2 = new Box(405,100,40,60);
  boxRed1 = new Box(780,130,40,60);
  boxRed2 = new Box(820,130,40,60);
  boxRed3 = new Box(740,130,40,60);
  boxOrange1 = new Box(760,80,40,60);
  boxOrange2 = new Box(800,80,40,60);
  boxYellow = new Box(780,20,40,60);
}

function draw() {
  background("black");  

  noStroke();
  textSize(25)
  fill("white")
  text("Score  " + score, width-150, 50)
  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();

  strokeWeight(20); 
  bomb.display();
  slingshot.display();
  fill(1, 190, 255);
  
  box1.display();
  box1.score();
  fill(1, 190, 255);
  box2.display();
  box2.score();
  fill(1, 190, 255);
  box3.display();
  box3.score();
  fill(1, 190, 255);
  box4.display();
  box4.score();
  fill(1, 190, 255);
  box5.display();
  box5.score();
  fill(1, 190, 255);
  box6.display();
  box6.score();
  fill(255, 137, 250);
  boxPink1.display();
   boxPink2.score();
  fill(255, 137, 250);
  boxPink2.display();
  fill(255, 137, 250);
  boxPink3.display();
  fill(255, 137, 250);
  boxPink4.display();
  fill(255, 137, 250);
  boxPink5.display();
fill(6, 107, 187);
   boxBlue1.display();
  fill(6, 107, 187);
  boxBlue2.display();
  fill(6, 107, 187);
  boxBlue3.display();
  fill(100);
  boxGray.display();
  boxGray2.display();
  fill(199, 0, 57);
  boxRed1.display();
  boxRed2.display();
  boxRed3.display();
  fill(255, 87, 51);
  boxOrange1.display();
  boxOrange2.display();
  fill(255, 195, 0);
  boxYellow.display();
fill(100);
textSize(15)
  text("Drag the ball and release to destroy the tower and seige it! SPACE TO TRY AGAIN.",100,50);
}

function mouseDragged(){
  Matter.Body.setPosition(bomb.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
  //Matter.Body.applyForce(bomb.body,bomb.body.position,{x:50,y:-50});
}

function keyPressed(){

  if(keyCode===32){
      slingshot.attach(bomb.body)
      Matter.Body.setPosition(bomb.body, {x: 200 , y: 200});
          }
}