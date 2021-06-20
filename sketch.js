
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var Score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500)
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("monkey" , monkey_running)
  monkey.scale=(0.2)
  ground=createSprite(400,375,900,10)
  ground.velocityX=-4
  
  FoodGroup= new Group()
  obstaclesGroup= new Group()
  
}


function draw() {
background("white")
  Score = Math.ceil(frameCount/frameRate())
  
 if (keyDown("space")){
   monkey.velocityY=-12
 }
  monkey.collide(ground);
    monkey.velocityY = monkey.velocityY + 0.8
  if (ground.x<300){
    ground.x=250
  }
   monkey.collide(ground)
  
 
   spawnBanana()
  spawnObstacles()
  drawSprites()
 text("Survival Time: "+ Score, 250,50);
  textSize(20)
  fill("black")
}

function spawnBanana(){
  if (World.frameCount%80===0){
    banana=createSprite(500,150,10,10)
    banana.velocityX=-6
    banana.addImage(bananaImage)
    banana.scale=(0.1)
   FoodGroup.add(banana);
  }
}

function spawnObstacles(){
  if (World.frameCount%300===0){
    obstacle=createSprite(500,333,10,10)
    obstacle.velocityX=-6
    obstacle.addImage(obstacleImage)
    obstacle.scale=(0.2)
    obstaclesGroup.add(obstacle);
  }
} 




