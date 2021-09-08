noseX = 0;
noseY = 0;

function preload(){
    glasses_img = loadImage("https://i.postimg.cc/QNTxWrF8/Cool-Glasses.png");
}

function setup(){
    canvas = createCanvas(500 , 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500 , 350);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw(){
    image(video , 0 , 0 , 500 , 350);
    image(glasses_img , noseX , noseY , 160 , 100);
}

function take_snap(){
    save('MY-Glasses.png');
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 80;
        noseY = results[0].pose.nose.y - 80;
        console.log("nose x = "+noseX);
        console.log("nose y = "+noseY);
    }
}