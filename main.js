var nose_X = "";
var nose_Y= "";
var length_side = 100;
var leftWrist_x = "";
var rightWrist_x = "";

leftWrist_x
function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(550, 180);

    background("violet");
    video = createCapture(VIDEO);
    video.size(500, 500);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function preload() {

}

function draw() {
    
    background("violet");
    fill("green");
    stroke("black");
    square(nose_X,nose_Y, length_side);
    

}

function modelloaded() {

    console.log("PoseNet Model Is Loaded")
}



function gotPoses(results) {

    if (results.length > 0) { 
        //results.length length of the array results means no. of the items
        console.log(results);
        
        nose_X = results[0].pose.nose.x;
        nose_Y = results[0].pose.nose.y;
        
        leftWrist_x  = results[0].pose.leftWrist.x;
        rightWrist_x  = results[0].pose.rightWrist.x;
        length_side = floor(leftWrist_x - rightWrist_x); 
        document.getElementById("difference").innerHTML = "Width And Height Of A Square Will Be = " + length_side;
        
    }

    

}