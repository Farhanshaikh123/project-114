function preload() {

}

function setup()
{
    canvas = createCanvas(700,700);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

 

}

function draw()
{
    image(video,200,200,300,300);
    fill(200,180,120);
    stroke(200,180,120);
    circle(100,100,100);
    circle(600,100,100);
    circle(100,600,100);
    circle(600,600,100);
    rect(100,100,500,50);
    rect(100,600,500,50);
    rect(600,100,50,500);
    rect(100,100,50,500);
}

function take_snapshot()
{
    save('student_name.png');
}
