let video;
let bodyPose;
let poses = [];

function test(x,y){
  fill("white")
  circle(x,y,40)
  fill("black")
  circle(x,y,20)
}
const randomizeButton = document.getElementById("randomize");
const eyes = [test];
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

  //initial randomization
  currentEye = eyes[Math.floor(Math.random() * eyes.length)];

  //check if button clicked, if so, randomize
  randomizeButton.addEventListener('click', () => {
    currentEye = eyes[Math.floor(Math.random() * eyes.length)];
  });

}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  // draw the webcam video
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
