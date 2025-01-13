<<<<<<< HEAD
let video;
let bodyPose;
let poses = [];
const eyes = [];
let connections;
const randomizeButton = document.getElementById("randomize");
let randomEye;

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
  // get the skeleton connection information
  connections = bodyPose.getSkeleton();

  // initial randomization
  randomEye();
}

function draw() {
  // draw the webcam video
  image(video, 0, 0, width, height);

  //check if button clicked, if so, randomize
  randomizeButton.addEventListener('click', () => {
    randomEye = eyes[Math.floor(Math.random() * eyes.length)];
  });

  // draw eyes
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
    for (let j = 1; j < 3; j++) {
      let keypoint = pose.keypoints[j];
      // only draw a circle if the keypoint's confidence is bigger than 0.1
      if (keypoint.confidence > 0.1) {
        fill(0, 255, 0);
        noStroke();
        randomEye(keypoint.x, keypoint.y);
      }
    }
  }
}

// when bodyPose outputs data
function gotPoses(results) {
  // save the output to the poses variable
  poses = results;
=======
let faceMesh;
let video;
let options = { maxFaces: 1, refineLandmarks: false, flipped: false };

let faces = []; // all faces detected, facepoints for each

function preload() {
    faceMesh = ml5.faceMesh(options);
}

function setup() {
    createCanvas(640, 480);

    // create webcam video and hide it
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();

    faceMesh.detectStart(video, gotFaces); // begin to detect faces with webcam 
}

function draw(){
    image(video, 0, 0, width, height); // draw webcam video
/*
    if (faces.length > 0 && faces[0].eyes){
        fill(140, 158, 189)
    }
*/
    // draw all the tracked face points
    for (let i = 0; i < faces.length; i++) {
        let face = faces[i];
        for (let j = 0; j < face.keypoints.length; j++) {
            let keypoint = face.keypoints[j];
            fill(180, 143, 194);
            noStroke();
            circle(keypoint.x, keypoint.y, 5);
        }
    }
}

// when faceMesh outputs data
function gotFaces(results) {
    faces = results; // save the output to the faces variable
>>>>>>> 480a5ec511622c9f08b6c61a88ebadb9f83f8438
}
