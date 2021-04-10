var canvas;
var music;
var box1,box2,box3,box4
var box
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1=createSprite(0,580,360,30)
    box2=createSprite(295,580,200,30)
    box3=createSprite(515,580,200,30)
    box4=createSprite(740,580,220,30)
    box=createSprite(random(20,750),100,40,40)
    box1.shapeColor="pink"
    box2.shapeColor="red"
    box3.shapeColor="yellow"
    box4.shapeColor="blue"
  box.velocityX=5
  box.velocityY=-5
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    //create edgeSprite
    box.bounceOff(edges)
  if(box.isTouching(box1)&&box.bounceOff(box1)){

      box.shapeColor="pink"
    
  }
  if(box.isTouching(box2)&&box.bounceOff(box2)){

    box.shapeColor="red"
    music.play();
}
if(box.isTouching(box3)&&box.bounceOff(box3)){

    box.shapeColor="yellow"
    box.velocityX=0
    box.velocityY=0
    music.stop();

}
if(box.isTouching(box4)&&box.bounceOff(box4)){

    box.shapeColor="blue"
}

    //add condition to check if box touching surface and make it box
    drawSprites();
}
