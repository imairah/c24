class Paper {
    constructor(x,y,radius){
   
    var options={
        restitution: 0.3,
        density: 0.8,
        friction: 0.5
    }

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.body = Bodies.circle(this.x, this.y, this.radius, options);
    World.add(world,this.body);
    
    }

    display(){
        fill("white");
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}