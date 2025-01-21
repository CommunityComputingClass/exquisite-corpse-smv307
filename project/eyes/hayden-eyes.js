function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(200);
  translate(200, 200);
  haydenEyes(0,0)

}
export function haydenEyes (x, y){
  noStroke()
  //eyelid
  fill("rgba(147, 147, 147, 0.51)")
  ellipse(x, y, 51, 45)
  //eyes
  stroke("black")
  fill("rgb(213, 213, 213)")
  ellipse(x, y, 50, 30);
    
  fill("white")
  noStroke()
  ellipse(x+2, y-2, 44, 20);
  fill('rgb(239, 123, 177)')
  ellipse(x+6, 0, 4, 8)
  //iris 
  for(let i=5; i>=0; i-=1 ){
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    
    fill(colors[i])
    ellipse(x, y, i*2+15, i*2+15)
  }
  fill('black')
  ellipse(x, y, 10, 10)
  fill('white')
  ellipse(x+3, y-5, 5, 5)
}