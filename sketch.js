const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    // write code slice the datetime
    var hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset

    if(hour>=01 && hour<03){
        bg = "sunrise1.png";
    }
    
 if(hour>=03 && hour<05){
    bg = "sunrise2.png";
}
if(hour>=05 && hour<07){
    bg = "sunrise3.png";
}
if(hour>=07 && hour<09){
    bg = "sunrise4.png";
}
if(hour>=09 && hour<11){
    bg = "sunrise5.png";
}
if(hour>=11 && hour<13){
    bg = "sunrise6.png";
}
if(hour>=13 && hour<15){
    bg = "sunset7.png";
}
if(hour>=15 && hour<17){
    bg = "sunset8.png";
}
if(hour>=17 && hour<19){
    bg = "sunset9.png";
}
if(hour>=19 && hour<21){
    bg = "sunset10.png";
}
if(hour>=21 && hour<23){
    bg = "sunset11.png";
}
if(hour>=23 && hour<01){
    bg = "sunset12.png";
}


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
