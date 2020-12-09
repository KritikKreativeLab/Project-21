var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223, 321);
  weight=random(30, 52);
  thickness=random(22, 83);
  bullet = createSprite(50, 200, 15, 10);
  wall= createSprite(1500, 200, thickness, height/2);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255, 255, 255); 
}

function draw() {
  background(0,0,0);
  bullet.collide(wall);
    
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness * thickness * thickness);
    if(damage>=10){
      wall.shapeColor=color(255, 0, 0);
    }
  
    if(damage<10){
      wall.shapeColor=color(0, 255, 0);
    }
  
  }
  

  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge=bullet.x +bullet.width+10;
  wallLeftEdge=wall.x;
  fill("white");
  text("bulletRightEdge" + bulletRightEdge + "wall" + wall.x, 10, 10);
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}




