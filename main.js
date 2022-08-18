song1="";
song2="";
leftWristY=0;
leftWristX=0;
rightWristY=0;
rightWristX=0;
function preload(){
    song1=loadSound("Music1.mp3");
    song2=loadSound("Music2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
     
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
     posenet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}
function gotPoses(error,results)
{
    if(results.length >0)
    {
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist= "+scoreLeftWrist);
    
        scoreRightWrist=results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist= "+scoreRightWrist);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);
    
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX +"rightWristY ="+ rightWristY);
        
    }
    }
    
function draw(){
    Image(video,0,0,600,500);

}