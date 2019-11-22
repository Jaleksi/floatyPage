const dots = [];


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  for(let i = 0; i<80; i++){
    dots.push(new Dot());
  }
}

function draw() {
  background(0, 80, 50);
  for(let j = 0; j < dots.length; j++){
    dots[j].show();
    dots[j].update(createVector(mouseX, mouseY));
    for(let k = 0; k < dots.length; k++){
      if(j != k){
        dots[j].showLines(dots[k]);
      }
    }
  }
}
