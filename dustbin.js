class Dustbin{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 100; 
         var options ={
             isStatic: true 
         }
    this.bottomBody = Bodies.rectangle(this.x, this.y,this.width, this.height, options);
    this.leftBody = Bodies.rectangle(this.x - 50,this.y - 50, this.width, this.height, options);
    this.rightBody = Bodies.rectangle(this.x + 50 ,this.y - 50, this.width, this.height, options);
    World.add(world,this.bottomBody);
    World.add(world,this.leftBody);
    World.add(world,this.rightBody);
    
    }

    display(){
var posBottom = this.bottomBody.position;
var posLeft = this.leftBody.position;
var posRight = this.rightBody.position;

//draw the left rectangle
push();
translate(posLeft.x, posLeft.y);
rectMode(CENTER);
rect(0,0,20,100);
pop();

push();
translate(posRight.x, posRight.y);
rectMode(CENTER);
rect(0,0,20,100);
pop();

push();
translate(posBottom.x, posBottom.y);
rectMode(CENTER);
rect(0,0,100,20);
pop();
}
}