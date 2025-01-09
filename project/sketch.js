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
}
