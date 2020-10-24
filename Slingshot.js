class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 50
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            push();
            var pointB = this.sling.pointB;
            stroke(255);
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
        
    }
    fly(){
        this.sling.bodyA=null; 
    }
    attach(body){
        this.sling.bodyA=body
            }
}