let video;
let bodyPose;
let poses = [];

<<<<<<< HEAD
// Class eyes
function haydenEyes (x, y){
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
=======
function test(x,y){
  fill("white");
  circle(x,y,40);
  fill("black");
  circle(x,y,20);
>>>>>>> a0f51000c4c26e0856b9ddc13e732d80c2b0aa8b
}

function hillaryEyes(x,y){
  fill ("white")  
  ellipse(x, y, 80, 40);
  describe('A white ellipse on a gray canvas.');
  stroke("black")
  circle(x, y, 25);
  circle(x+15, y+5, 10);
}
function sloaneEyes(x,y){
  fill("white");
  circle(x,y,40);
  fill("black");
  circle(x,y,20);
}



const randomizeButton = document.getElementById("randomize");


const eyes = [sloaneEyes, hillaryEyes, haydenEyes];
let currentEye;

function preload() {
  bodyPose = ml5.bodyPose();
}

function setup() {
  createCanvas(640, 480);

  // create the video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // start detecting poses in the webcam video
  bodyPose.detectStart(video, gotPoses);


  currentEye = eyes[Math.floor(Math.random() * eyes.length)];
  //check if button clicked, if so, randomize
  randomizeButton.addEventListener('click', () => {
    currentEye = eyes[Math.floor(Math.random() * eyes.length)];
  });

}

function draw() {
  image(video, 0, 0, width, height);

  // draw eyes
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
    for (let j = 1; j < 3; j++) {
      let keypoint = pose.keypoints[j];
      // only draw a circle if the keypoint's confidence is bigger than 0.1
      if (keypoint.confidence > 0.1) {
        fill(0, 255, 0);
        noStroke();
        currentEye(keypoint.x, keypoint.y);
      }
    }
  }
}

// when bodyPose outputs data
function gotPoses(results) {
  // save the output to the poses variable
  poses = results;
}
