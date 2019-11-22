class Dot {
  constructor() {
    this.pos = createVector(random(0, windowWidth), random(0, windowHeight));
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
  }

  show() {
    strokeWeight(6);
    stroke(0, 255, 162);
    point(this.pos.x, this.pos.y);
  }

  reset(){
    this.pos = createVector(random(0, 500), random(0, 500));
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
  }

  checkBoundaries(){
    if(this.pos.x < 0){
      this.pos.x = windowWidth
    }
    if(this.pos.x > windowWidth){
      this.pos.x = 0
    }
    if(this.pos.y < 0){
      this.pos.y = windowHeight
    }
    if(this.pos.y > windowHeight){
      this.pos.y = 0
    }
  }

  update(mousevec){
    this.checkBoundaries();
    if(dist(this.pos.x, this.pos.y, mouseX, mouseY) < 200){
        mousevec.sub(this.pos);
        mousevec.setMag(-0.1);
        this.vel.add(mousevec);
        this.pos.add(this.vel);
      }
      else{
        this.vel
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.vel.limit(0.5);
      }
    }

  showLines(neighb){
    let distance = int(dist(this.pos.x, this.pos.y, neighb.pos.x, neighb.pos.y));
    if(distance < 200){
      let wght = map(distance, 0, 200, 255, 0);
      strokeWeight(1);
      stroke(0, 255, 162, wght);
      line(this.pos.x, this.pos.y, neighb.pos.x, neighb.pos.y);


    }

  }


}
