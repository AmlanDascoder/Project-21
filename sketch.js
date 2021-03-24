var canvas;
var music;
var sprite1;
var sprite2;
var sprite3;
var sprite4;
var ball;


function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    sprite1 = createSprite(90, 580, 170, 25);
    sprite1.shapeColor = "red";
    sprite2 = createSprite(270, 580, 170, 25);
    sprite2.shapeColor = "blue";
    sprite3 = createSprite(450, 580, 170, 25);
    sprite3.shapeColor = "yellow";
    sprite4 = createSprite(630, 580, 170, 25);
    sprite4.shapeColor = "green"
    ball = createSprite(400, 300, 20, 20);
    ball.shapeColor = "purple";
    ball.velocityX = 4;
    ball.velocityY = 4;

    edges=createEdgeSprites();
    

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    if(sprite1.isTouching(ball) && ball.bounceOff(sprite1)) {
        ball.shapeColor = "red";
    }

    if(sprite2.isTouching(ball) && ball.bounceOff(sprite2)) {
        ball.shapeColor = "blue";
    }

    if(sprite3.isTouching(ball) && ball.bounceOff(sprite3)) {
        ball.shapeColor = "yellow";
    }

    if(sprite4.isTouching(ball) && ball.bounceOff(sprite4)) {
        
       // bounceOff(ball,sprite4);
        ball.shapeColor = "green";
        
    }
    
    

    

    
    ball.bounceOff(edges);
    drawSprites();



    //add condition to check if box touching surface and make it box
}
