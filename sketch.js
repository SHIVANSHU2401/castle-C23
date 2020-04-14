const Engine = Matter.Engine;
const world = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var box1;
var ground;


function setup() {
  
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,300,50,50);
  ground = new Ground(200,390,400,20);
}


function draw() {
  background(0);  
  Engine.update(update);

  box1.display();
  ground.display();
}