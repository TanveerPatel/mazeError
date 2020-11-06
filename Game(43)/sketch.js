var player;
var guard1, guard2;
var canvas;
var square1,square2,square3,square4;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,end1;
var wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,end2;
var level = 0;

var maze1Obj,maze2Obj;

function preload(){
  player = loadImage("images/player1.png");
  guard1 = loadImage("images/guard1.png");
  guard2 = loadImage("images/guard2.png");
  
}

function setup(){
  canvas = createCanvas(400,400);
 // canvas.style = "position:absolute;top:0px;bottom:0px;right:0px;left:0px;border:solid;border-color:black";
  // square1 = rect(10,800,width/3,height/3)

  player = createSprite(20,380,10,10);
  player.shapeColor = "red";

  guard1 = createSprite(380,20,10,10);
  guard1.shapeColor = "green";

    wall1 =createSprite(40,250,10,150);
    wall1.shapeColor = "black";
  
    wall2 = createSprite(120,60,200,10);
    wall2.shapeColor="black";
  
    wall3 = createSprite(140,202,10,200);
    wall3.shapeColor = "black";
  
    wall4 = createSprite(215,180,40,10);
    wall4.shapeColor = "black";
  
    wall5 = createSprite(260,350,100,10);
    wall5.shapeColor = "black";
  
    wall6 = createSprite(280,180,10,200);
    wall6.shapeColor = "black";
  
    wall7 = createSprite(340,180,100,10);
    wall7.shapeColor = "black";
  
    wall8 = createSprite(340,80,10,50);
    wall8.shapeColor = "black";
  
    wall9 = createSprite(100,370,10,60);
    wall9.shapeColor = "black";
  
    wall10 = createSprite(20,120,40,10);
    wall10.shapeColor = "black";
    end1 = createSprite(395,5,5,5);
    end1.shapeColor = "red";
   // maze1Obj=new Maze1();
   //maze2Obj=new Maze2();
}
function draw(){
  background("white");
  text(mouseX+", "+mouseY,mouseX,mouseY);

  

 /*createEdgeSprites();
 player.bounceOff(topEdge);
 player.bounceOff(bottomEdge);
 player.bounceOff(rightEdge);
 player.bounceOff(leftEdge);*/

if(level===0){
  fill("red")
  text("press enter to start",100,100)
}
  if(keyDown(ENTER) && level===0){
    
    level=1;
  }

  if(level===1){ 
   // maze1Obj.display();
  player.bounceOff(wall1);
    player.bounceOff(wall2);
    player.bounceOff(wall3);
    player.bounceOff(wall4);
    player.bounceOff(wall5);
    player.bounceOff(wall6);
    player.bounceOff(wall7);
    player.bounceOff(wall8);
    player.bounceOff(wall9);
    player.bounceOff(wall10);
 // drawSprites();
    // end1 = createSprite(395,5,5,5);
    // end1.shapeColor = "red";
  }
    if(player.x>=395 && player.y<=5 && level===1){
    
      console.log(level);
      level=2;
     // maze1Obj.destroy();
      wall1.life = 0;
      wall2.life = 0;
      wall3.life = 0;
      wall4.life = 0;
      wall5.life = 0;
      wall6.destroy() 
      wall7.destroy() 
      wall8.destroy() 
      wall9.destroy() 
      wall10.destroy() 
      end1.destroy() 
      player.x=20;
      player.y=380
console.log("end level 1 ")
     
      //console.log("end");
     // console.log(wall2);

    }
  
  
     if(level===2){
     
      maze2Obj=new Maze2();

      // maze2Obj.display();
  //   player.position.x = 20;
  //   player.position.y = 380;
      
  //   wall11 = createSprite(70,50,10,200);
  //   wall11.shapeColor = "blue";

  //   wall12 = createSprite(50,230,10,70);
  //   wall12.shapeColor = "blue";

  //   wall13 = createSprite(35,320,160,10);
  //   wall13.shapeColor = "blue";

  //   wall14 = createSprite(200,40,200,10);
  //   wall14.shapeColor = "blue";

  //   wall15 = createSprite(165,183,80,10);
  //   wall15.shapeColor = "blue";

  //   wall16 = createSprite(180,340,10,155);
  //   wall16.shapeColor = "blue";

  //   wall17 = createSprite(260,210,10,200);
  //   wall17.shapeColor = "blue";

  //   wall18 = createSprite(325,135,50,10);
  //   wall18.shapeColor = "blue";

  //   wall19 = createSprite(340,260,10,80);
  //   wall19.shapeColor = "blue";

  //   wall20 = createSprite(360,320,80,10);
  //   wall20.shapeColor = "blue";

  //   end2 = createSprite(395,5,5,5);
  //   end2.shapeColor = "red";

    player.bounceOff(wall11);
    player.bounceOff(wall12);
    player.bounceOff(wall13);
    player.bounceOff(wall14);
    player.bounceOff(wall15);
    player.bounceOff(wall16);
    player.bounceOff(wall17);
    player.bounceOff(wall18);
    player.bounceOff(wall19);
    player.bounceOff(wall20);

     if(player.x>=395 && player.y<=5){
      level = 3;
maze2Obj.destroy();
console.log("maze2 destroy")
clear ()


//   //     wall11.lifetime = 0;
//   //     wall12.lifetime = 0;
//   //     wall13.lifetime = 0;



}
  
   }
   
  
  if(keyDown(UP_ARROW)){
    player.position.y -= 5;
  }
  if(keyDown(DOWN_ARROW)){
    player.position.y +=5;
  }
  if(keyDown(RIGHT_ARROW)){
    player.position.x +=5;
  }
  if(keyDown(LEFT_ARROW)){
    player.position.x -=5;
  } 

 drawSprites()



}


