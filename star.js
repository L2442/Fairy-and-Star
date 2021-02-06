class Star{
    constructor(x, y) {
      var options = {
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      imageMode(CENTER);
      fill(255);
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      image(0, 0, this.width, this.height);
      pop();
    }
  }
  