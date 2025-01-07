const pink = color(255, 204, 204);

let pupil = {
  x:250,
  y:200,
  radius: 30,
  direction: 1,
  
  show(){
    fill("black");
    noStroke();
    circle(this.x, this.y, this.radius);
  },
  
  move(){
    this.x+=5
    if(this.x>450||this.x<50){
      this.direction*-1;
    }
  }
};

function setup() {
  createCanvas(500, 400);
  noStroke();
}

function draw() {
  background(pink);
  fill("white");
  circle(250, 200, 200); // big circle
  
  pupil.move();
  pupil.show();
}
