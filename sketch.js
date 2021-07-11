var jake,jake_running;
var ground, groundImage;
var leftbroder,rightborder;
function preload(){
  jake_running = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");
 groundImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
 
  jake = createSprite(180,50,20,50);
  jake.addAnimaton("running", jake_running); 
  jake.scale = 0.5;

  ground = createSprite(180,200,20,400);
 ground.addImage("ground",groundImage);
 ground.y = ground.height/ 2

}

function draw() {
  background(0);
 World.mouseX = jake.x

 jake.collide(leftborder||rightborder);
 drawSprites();

}
