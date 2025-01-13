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
    ellipse(x+60, y, 51, 45)
    ellipse(x-60, y, 51, 45)
    //eyes
    stroke("black")
    fill("rgb(213, 213, 213)")
    ellipse(x+60, y, 50, 30);
    ellipse(x-60, y, 50, 30);
    
    fill("white")
    noStroke()
    ellipse(x+62, y-2, 44, 20);
    ellipse(x-58, y-2, 44, 20);
    fill('rgb(239, 123, 177)')
    ellipse(x-36, 0, 4, 8) 
    ellipse(x+36, 0, 4, 8)
    //iris 
    for(let i=5; i>=0; i-=1 ){
      let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    
      fill(colors[i])
      ellipse(x+60, y, i*2+15, i*2+15)
      ellipse(x-60, y, i*2+15, i*2+15)
    }
    fill('black')
    ellipse(x+60, y, 10, 10)
    ellipse(x-60, y, 10, 10)
    fill('white')
    ellipse(x+63, y-5, 5, 5)
    ellipse(x-57, y-5, 5, 5)
  
  }