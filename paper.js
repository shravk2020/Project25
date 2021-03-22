class paper{
    constructor(){
        this.image = loadImage('paper.png');
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        
        }

    this.body = Bodies.circle(50, 600, 20, options);
    World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 40, 40);
        
    }
}