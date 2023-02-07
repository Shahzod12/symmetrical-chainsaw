noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function preload() {
    var status cocossd

}
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    innerHTML Text "Detecting Objects"
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
    status true
}
function gotPoses(results) 
{
    if(results.length > 0)
    {
        text(objects[i].label (objects[i].confidence objects [i].x, objects[i].y);
        objects[i].width
        objects[i].height
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);
    
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }    
}
function draw() {
    background('#969A97');
    document.getElementById('square_sides').innerHTML="width and height of square is"+difference+"px"
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}
function gotResults() {
    
}