
var trex ,trex_running;
function preload(){
 trex_running=loadAnimation('trex1.png','trex3.png','trex4.png');

}

function setup(){
  createCanvas(600,200);
 trex=createSprite(50,150,30,20);
  trex.addAnimation('trexrunning',trex_running);
  trex.scale=0.4;
ground=createSprite(200,180,400,20);

  //create a trex sprite
 
}

function draw(){
  background("black");

  if(keyDown('space'))
trex.velocityY=-4
trex.velocityY=trex.velocityY+0.5
trex.collide(ground);
drawSprites();
}
