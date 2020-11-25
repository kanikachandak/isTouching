var fixed, moving;
function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(300,150,50,50);
  moving.shapeColor="white";
}

function draw() {
  background(0);  
  drawSprites();
  moving.x=mouseX;
  moving.y=mouseY;
  if(moving.x-fixed.x<=(moving.width+fixed.width)/2 && 
    fixed.x-moving.x<=(moving.width+fixed.width)/2 &&
     moving.y-fixed.y<=(moving.height+fixed.height)/2 && 
    fixed.y-moving.y<=(moving.height+fixed.height)/2)
  {
    fixed.shapeColor="blue";
  }
  else
  {
    fixed.shapeColor="grey";
  }
}