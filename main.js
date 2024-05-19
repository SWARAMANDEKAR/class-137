function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
}

img="";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function draw()
{
    image(img,0,0,640,420);
    fill("green");
    text("dog",45,75);
    noFill();
    stroke("cyan");
    rect(30,60,450,350);

    fill("green");
    text("cat",320,120);
    noFill();
    stroke("cyan");
    rect(300,90,270,320);
}