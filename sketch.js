
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup()
{
  createCanvas(400,400);
engine = Engine.create()

world = engine.world;
var ball_options = {
  restitution:0.9, frictionAir:0.01
}

var ground_options = {
  isStatic: true
}

var rock_options =  {
  restitution: 0.8
}

var wall_options = {
  isStatic: true
}

ball = Bodies.circle(100,10,20,ball_options);
World.add(world, ball);

ground = Bodies.rectangle(0,390,400,20,ground_options);
World.add (world,ground);

rock=  Bodies.circle(300,20,10, rock_options);
World.add (world,rock);

wall = Bodies.rectangle(300,200,200,20,wall_options);
World.add (world,wall);
}

function draw() 
{
  background("green");
Engine.update(engine);
ellipse(ball.position.x,ball.position.y,20,20); 
rect(ground.position.x,ground.position.y,400,20);
ellipse(rock.position.x,rock.position.y,30,30);
rect(wall.position.x,wall.position.y,200,10);
}

