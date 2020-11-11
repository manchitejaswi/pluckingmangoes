class mango{
    constructor(x,y,radius){
        var options = {
            isStatic : true,
            restituion : 0,
            friction : 1
        }
                this.body = Bodies.circle(x, y, radius, options);
                this.image=loadImage("sprites/mango.png")
     World.add(world, this.body);}
     
     display(){
      
        var position =this.body.position; 
       
      
        ellipseMode(RADIUS);
       
        ellipse(200,350, 20,20);
        
    }
};