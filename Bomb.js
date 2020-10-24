
      class Bomb {
        constructor(x,y,r){
            var options={
                friction:0.3,
                density:0.5,
               restitution:0.8
            }
            this.x=x;
            this.y=y;
            this.r=r;
     // this.image = loadImage("bomb.png")
            this.body=Bodies.circle(this.x,this.y,this.r/2,options)
            World.add(world,this.body);
        }
        display(){
         
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(this.body.angle);
            fill(255);
      
            ellipseMode(CENTER);
            ellipse(0,0,this.r);
            pop();
        }
      }
     
      
      
      
      
      
      
      


    //     class Bomb {
    //         constructor(x, y, r) {
    //           var options = {
    //               isStatic:false,
    //               'restitution':0.3,
    //               'friction':0.5,
    //               'density':1.2,
    //           }
            
    //           this.image = loadImage("bomb.png");
    //           this.r=r;
    //           this.x=x;
    //           this.y=y;

    //   this.body=Bodies.circle(this.x,this.y,this.r,options)
    //   World.add(world,this.body);
    //         }
    //         display(){
    //           var pos =this.body.position;
    //           var angle = this.body.angle;
    //           push();
    //           translate(pos.x,pos.y);
    //           rotate(angle);
    //           imageMode(CENTER);
    //           fill(0);
    //       image(this.image, 0, 0, this.r);
    //           pop();
    //         }
    //       }
    