// Declaring the golobal variable box so that we can make a sprite
var box;
function setup() {
  createCanvas(400,400);
  // defining the variable box as a sprite
box = createSprite(200,200,50,50);
}

function draw() 
{
  background(30);
  // making the sprite move around with the right arrow keys
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 5;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x - 5;
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y = box.position.y - 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y + 5;
  }
drawSprites();
}




