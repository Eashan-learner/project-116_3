mustacheX=0;
mustacheY=0;

function preload(){
mustache_m= loadImage("https://i.postimg.cc/j56BqMZ4/m.png");
}
function setup(){
Canvas=createCanvas(450,300);
Canvas.position(450,200);
video = createCapture(VIDEO);
video.size(450,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length > 0)
    {      
        console.log(results);
        console.log("mustache x =" + results[0].pose.nose.x);
        console.log("mustache y =" + results[0].pose.nose.y);
        mustacheX = results[0].pose.nose.x;
        mustacheY = results[0].pose.nose.y;
        console.log("mustacheX = " + mustacheX);
        console.log("mustacheY = " + mustacheY);
    } 

} 
function modelLoaded(){
    console.log('PoseNet is initialized');
}

function draw(){
image(video, 0, 0, 450, 300);
image(mustache_m, mustacheX-20, mustacheY-10, 50, 50);


}
function haha(){
    save("myFILTERapp.jpg");
}
