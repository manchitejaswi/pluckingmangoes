class stone{
    constructor(x,y,width,height){
        var options ={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x, y,50,50, options);
        this.image=loadImage("sprites/stone.png")
        this.width = 50;
        this.height = 50;
        
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
}
};