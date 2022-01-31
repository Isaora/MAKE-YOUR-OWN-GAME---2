var bg, bgImg;
var bottomGround;
var topGround;
var bird, birdImg;
var bird_1, bird_1Img;
var obstacleTop, obsTop_1, obsTop_2, obsTop_3;
var obstacleBottom, obsBottom_1, obsBottom_2, obsBottom_3;

function preload(){
  bgImg = loadImage("bgImg.png");
  
  bird_1Img = loadImage("bird_1Img.png");
  
  obsTop_1 = loadImage("obsTop_1.png");
  obsTop_2 = loadImage("obsTop_2.png");
  obsTop_3 = loadImage("obsTop_3.png");

  obsBottom_1 = loadImage("obsBottom_1.png");
  obsBottom_2 = loadImage("obsBottom_2.png");
  obsBottom_3 = loadImage("obsBottom_3.png");
  
}

function setup(){

  createCanvas(400,400);
//background image
bg = createSprite(165,385,1,1);
bg.addImage(bgImg);
bg.scale = 1.3;

//creating top and bottom grounds
bottomGround = createSprite(200,390,300,20);
bottomGround.visible = false;

topGround = createSprite(200,10,300,20);
topGround.visible = false;

//creating bird
bird = createSprite(100,200,20,50);
bird.addAnimation("bird",birdImg);
bird.scale = 0.2;
}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            bird.velocityY = -6 ;
            
          }

          //adding gravity
           bird.velocityY = bird.velocityY + 2;

           
          Bar();
   
        drawSprites();
       
        //spawning top obstacles
      spawnObstaclesTop();

      
}

function spawnObstaclesTop() 
{
      if(World.frameCount % 60 === 0) {
        obstacleTop = createSprite(400,50,40,50);
    
    //obstacleTop.addImage(obsTop1);
    
    obstacleTop.scale = 0.1;
    obstacleTop.velocityX = -4;

    //random y positions for top obstacles
    obstacleTop.y = Math.round(random(10,100));

    //generate random top obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacleTop.addImage(obsTop_1);
              break;
      case 2: obstacleTop.addImage(obsTop_2);
              break;
      default: break;
    }

     //assign lifetime to the variable
   obstacleTop.lifetime = 100;
    
   bird.depth = bird.depth + 1;
   
      }
}

 function Bar() 
 {
         if(World.frameCount % 60 === 0)
         {
           var bar = createSprite(400,200,10,800);
          bar.velocityX = -6;
          bar.depth = bird.depth;
          bar.lifetime = 70;
          bar.visible = false;
         }
}
