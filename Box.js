class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':0.05,
        'strokeWeight':6
    }
  
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){

    if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
     
      World.remove(world, this.body);
    }
  }
    score(){
      if (this.body.speed < 1){
        score = score - 0.5
    }
    if(this.body.speed > 3){
      score = score +1
    }

    if(score >= 2000){
      score = 2000
    }
    
  }
};