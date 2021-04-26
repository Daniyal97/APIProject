const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    backgroundImg = loadImage("sunrise1.png");
    getBackGroundImg();
}

    function setup(){
        var canvas = createCanvas(1200,400);
        engine = Engine.create();
        world = engine.world;
    }

function draw(){

    // add condition to check if any background image is there to add
    background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here


}


    // write code to fetch time from API
    async function getBackGroundImg(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
        var responsejson = await response.json();
        var date = responsejson.datetime
        console.log(date);
        var hour = date.slice(11,13);
        if (hour >= 04 && hour<= 05){
            bg = "sunrise1.png"
        } else if (hour >= 05 && hour<= 06){
            bg = "sunrise2.png"
        } else if (hour >= 06 && hour<= 07){
            bg = "sunrise3.png"
        }else if (hour >= 07 && hour<= 08){
            bg = "sunrise4.png"
        }else if (hour >= 08 && hour<= 09){
            bg = "sunrise5.png"
         }else if (hour >= 10 && hour<= 16){
            bg = "sunrise6.png"
         }else if (hour >= 16 && hour<= 17){
            bg = "sunset7.png"
         }else if (hour >= 17 && hour<= 18){
            bg = "sunset8.png"
         }else if (hour >= 18 && hour<= 19){
            bg = "sunset9.png"
         }else if (hour >= 20 && hour<= 21){
            bg = "sunset10.png"
         }else if (hour >= 21 && hour<= 22){
            bg = "sunset11.png"
         }else{
            bg = "sunset12.png"
         }
    
        backgroundImg = loadImage(bg);
    }
