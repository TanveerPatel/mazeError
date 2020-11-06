class Maze1{
    constructor(){
        player = createSprite(20,380,10,10);
   player.shapeColor = "red";
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
    }
    destroy(){
      wall1.destroy() 
      wall2.destroy() 
      wall3.destroy() 
      wall4.destroy() 
      wall5.destroy() 
      wall6.destroy() 
      wall7.destroy() 
      wall8.destroy() 
      wall9.destroy() 
      wall10.destroy() 
      end1.destroy() 
    }
    display(){
        drawSprites();

    }
}