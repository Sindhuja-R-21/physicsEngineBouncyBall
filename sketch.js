const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   var a={
       isStatic: true
   }

    ground = Bodies.rectangle(200,380,400,20,a);
    World.add(world,ground);

    ground1=Bodies.rectangle(200,300,400,10,a);
    World.add(world,ground1);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,40, ball_options);
    World.add(world,ball);


    var p={
        restitution: 1.5
    }
    box=Bodies.rectangle(300,100,20,20,p);
    World.add(world,box);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(ground1.position.x,ground1.position.y,400,20);
    rect(box.position.x,box.position.y,20,20);
    ellipseMode(RADIUS);
    circle(ball.position.x, ball.position.y, 40);
}
