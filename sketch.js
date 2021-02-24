var red_balloon,red_balloonImage
var blue_balloon,blue_balloonImage
var green_balloon,green_balloonImage
var pink_balloon,pink_balloonImage
var arrow,arrowImage
var background,backgroundImage
var bow,bowImage


function preload(){
   
 red_balloonImage=loadImage("red_balloon0.png");
 blue_balloonImage=loadImage("blue_balloon0.png");
 green_balloonImage=loadImage("green_balloon0.png");
 pink_balloonImage=loadImage("pink_balloon0.png");
 arrowImage=loadImage("arrow0.png");
  backgroundImage=loadImage("background0.png");
  bowImage=loadImage("bow0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
  background=createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale=2.5
  
for(var i = 60;i<390;i=i+60)
    {red_balloon=createSprite(50,i,1,1);
     red_balloon.addImage(red_balloonImage);
     red_balloon.scale=0.1;
    }

for(var i = 130;i<350;i=i+60)
   {blue_balloon=createSprite(130,i,1,1);
    blue_balloon.addImage(blue_balloonImage);
    blue_balloon.scale=0.1
   }
  
 for(var i = 110;i<390;i=i+60) 
   {green_balloon=createSprite(90,i,1,1);
    green_balloon.addImage(green_balloonImage)
    green_balloon.scale=0.1
   }
 
for(var i = 180;i<250;i=i+60)
  {pink_balloon=createSprite(180,i,1,1);
   pink_balloon.addImage(pink_balloonImage)
   pink_balloon.scale=1.2 
  }
  
bow=createSprite(480,220,20,50);
bow.addImage(bowImage)
bow.scale=1
  
  arrow=createSprite(415,216,5,10)
  arrow.addImage(arrowImage)
  arrow.velocityX=-6;
  arrow.scale=0.3
  return arrow 
  
if(keyDown("space")){
  var temp_arrow = createArrow();
  temp_arrow.addImage(arrowImage);
    temp_arrow.y = bow.y
  } 
}

function draw() {
  //set background color
  background.velocityX=-6;
  if(background.x<0)
    {
      background.x=background.width/2
    }
  drawSprites();
  
}

