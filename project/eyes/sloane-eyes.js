let pink = color(255, 204, 204);

let pupil = {
  x:250,
  y:200,
  radius: 50,
  direction: 1,
  
  show(){
    fill("black");
    noStroke();
    circle(this.x, this.y, this.radius);
  },
  
  move(){
    this.x+=(1*this.direction)
    if(this.x>300||this.x<200){
      this.direction*=-1;
    }
  }
};

function setup() {
  createCanvas(500, 400);
  noStroke();
}

function draw() {
  background("pink");
  fill("white");
  circle(250, 200, 200); // big circle
  
  sloaneEyes();
}

export function sloaneEyes(x,y){
    pupil.x=x;
    pupul.y=y;
    pupil.move();
    pupil.show();
}

export{pupil};