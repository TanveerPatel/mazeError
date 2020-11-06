class Maze2{
    constructor(){
        wall11 = createSprite(70,50,10,200);
          wall11.shapeColor = "blue";
      
          wall12 = createSprite(50,230,10,70);
          wall12.shapeColor = "blue";
      
          wall13 = createSprite(35,320,160,10);
          wall13.shapeColor = "blue";
      
          wall14 = createSprite(200,40,200,10);
          wall14.shapeColor = "blue";
      
          wall15 = createSprite(165,183,80,10);
          wall15.shapeColor = "blue";
      
          wall16 = createSprite(180,340,10,155);
          wall16.shapeColor = "blue";
      
          wall17 = createSprite(260,210,10,200);
          wall17.shapeColor = "blue";
      
          wall18 = createSprite(325,135,50,10);
          wall18.shapeColor = "blue";
      
          wall19 = createSprite(340,260,10,80);
          wall19.shapeColor = "blue";
      
          wall20 = createSprite(360,320,80,10);
          wall20.shapeColor = "blue";
      
          end2 = createSprite(395,5,5,5);
          end2.shapeColor = "red";
    }
    display(){
        drawSprites();
    }
    destroy(){
      wall11.destroy() 
      wall12.destroy() 
      wall13.destroy() 
      wall14.destroy() 
      wall15.destroy() 
      wall16.destroy() 
      wall17.destroy() 
      wall18.destroy() 
      wall19.destroy() 
      wall20.destroy() 
      end1.destroy() 
    }
}