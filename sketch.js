const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var block1, block2, rotator1, rotator2, rotator3;

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  var plane_options = {
    isStatic: true
  };
  var rotator_options = {
    isStatic: true
  };
  var particle_options = {
   restitution:0.4,
   friction:0.02,
   scale:4,
  };

  block1 = Bodies.rectangle(200, 400, 150, 20, plane_options);
  World.add(world, block1);

  block2 = Bodies.rectangle(600, 400, 150, 20, plane_options);
  World.add(world, block2);

  rotator1 = Bodies.rectangle(400, 200, 150, 20, rotator_options);
  World.add(world, rotator1);

  rotator2 = Bodies.rectangle(400, 200, 150, 20, rotator_options);
  World.add(world, rotator2);

  rotator3 = Bodies.rectangle(400, 200, 150, 20, rotator_options);
  World.add(world, rotator3);

  particle1 = Bodies.circle(400,10,10,particle_options);
  World.add(world,particle1);

  particle2 = Bodies.circle(405,10,10,particle_options);
  World.add(world,particle2);

  particle3 = Bodies.circle(410,10,10,particle_options);
  World.add(world,particle3);

  particle4 = Bodies.circle(395,10,10,particle_options);
  World.add(world,particle4);

  particle5 = Bodies.circle(390,10,10,particle_options);
  World.add(world,particle5);

  Engine.run(engine);
}

function draw() {
  background("royalblue");
  rectMode(CENTER);

  fill(255);
  rect(block1.position.x, block1.position.y, 150, 20);
  rect(block2.position.x, block2.position.y, 150, 20);

  fill(255, 0, 0);
  push();
  translate(rotator1.position.x, rotator1.position.y);
  rotate(rotator1.angle);
  rect(0, 0, 150, 20);
  pop();

  push();
  translate(rotator2.position.x, rotator1.position.y);
  rotate(rotator2.angle);
  rect(0, 0, 150, 20);
  pop();
  
  push();
  translate(rotator2.position.x, rotator1.position.y);
  rotate(rotator3.angle);
  rect(0, 0, 150, 20);
  pop();

  Matter.Body.rotate(rotator1, 10); // Girar rotator1
  Matter.Body.rotate(rotator2, 20);
  Matter.Body.rotate(rotator3, 30);~

  fill(255);
  circle(particle1.position.x, particle1.position.y,10,10);
  circle(particle2.position.x, particle2.position.y,10,10);
  circle(particle3.position.x, particle3.position.y,10,10);
  circle(particle4.position.x, particle4.position.y,10,10);
  circle(particle5.position.x, particle5.position.y,10,10);
}
