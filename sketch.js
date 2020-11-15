var car ,wall ;
var weight , speed;


function setup() {
  createCanvas(1600,400);

  speed   = random(400,1500);
  
  car   =  createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = color(255); 

  wall  =  createSprite(1000,200,50,400 );
  wall.shapeColor = color(80,80,80);

  weight  = random(55,90);

}

function draw() {
  background("black"); 
  
  if(wall.x-car.x < (wall.width + car.width)/2){

    var deformation = 0.5*weight*weight*speed/22500
    car.velocityX = 0 ; 

    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }
    
    if (deformation < 180 &&   deformation > 100 ){
      car.shapeColor = color(230,230,0);
    }

    if(deformation > 180){
      car.shapeColor =color(255,0,0);
    }
  }


  drawSprites();
}