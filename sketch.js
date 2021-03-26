
function preload() {
  bg=loadImage("garden.png")
  catImg1=loadAnimation("cat1.png")
  catImg2=loadAnimation("cat2.png","cat3.png")
  catImg3=loadAnimation("cat4.png")
  mouseImg1=loadImage("mouse1.png")
  mouseImg2=loadImage("mouse2.png","mouse3.png")
  mouseImg3=loadImage("mouse4.png")
  
}

function setup(){
    createCanvas(1000,800);
   cat=createSprite(870,600 )
   cat.addAnimation("T1",catImg1)
   cat.scale=0.2
   mouse=createSprite(200,600)
   mouse.addAnimation("M1",mouseImg1)
   mouse.scale=0.16
}

function draw() {

    background(bg);
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
      cat.velocityX=0
      cat.addAnimation("T2",catImg3)
      cat.scale=0.2
      cat.x=300
      cat.changeAnimation("T2")
      mouse.addAnimation("M2",mouseImg3)
      mouse.scale=0.16
      mouse.changeAnimation("M2")
    }
    

    drawSprites();
}


function keyPressed(){

   if(keyCode===LEFT_ARROW){
   cat.velocityX=-5
   cat.addAnimation("T3",catImg2)
   cat.changeAnimation("T3")
   
   mouse.addAnimation("M3",mouseImg2)
   mouse.frameDelay=25
   mouse.changeAnimation("M3")
   }


}
