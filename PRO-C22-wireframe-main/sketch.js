const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var angle=20;
const Body = Matter.Body;
var balls=[]
var boats=[]
var boatAnimation= []
var boatSpriteSheet;
var boatSpriteData;
function preload() {
 
  backImg=loadImage("assets/background.gif");
  boatSpriteData= loadJSON('assets/boat/boat.json');
  boatSpriteSheet= loadImage('assets/boat/boat.png');
}


function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angle=15;
  

  ground=new Ground();

  tower=new Tower();

  canon=new Canon(140, 110, 130, 100, angle);

  var boatFrames= boatSpriteData.frames;

  for(var i= 0; i<boatFrames.length; i++)
  {
    var pos= boatFrames[i].position
    var img= boatSpriteSheet.get(pos.x, pos.y, pos.w, pos.h)
    boatAnimation.push(img)
  }
}

function draw() {
  background(189);
  Engine.update(engine);
 
 image(backImg, width/2, height/2, width, height)
  ground.show();
  tower.show(); 

  for(var i=0; i<balls.length; i++)
  {
    showCanonBalls(balls[i], i)
    collisionBoat(i)
  }

  canon.show(); 

  showBoats();

}

function keyReleased()
{
  if(keyCode===DOWN_ARROW)
  {
    balls[balls.length-1].shoot();
  }
}

function keyPressed()
{
  if(keyCode===DOWN_ARROW)
  {
    canonBall=new CanonBall(canon.x, canon.y+5);
    balls.push(canonBall)
  }
}

function showCanonBalls(ball, i)
{
  if(ball)
  {
    ball.show();
    if(ball.body.position.x>=width || ball.body.position.y>=height-50)
    {
      ball.remove(i)
    }
  }
}

function showBoats()
{
  if(boats.length>0)
  {
    if(boats[boats.length-1]=== undefined || boats[boats.length-1].body.position.x<width-300)
    {
      var positions= [-40, -80, -60, -20]
      var position= random(positions)
      var boat=new Ship(width, height-50, 170, 170, position, boatAnimation)
      boats.push(boat)
    }
    for(var i=0; i<boats.length; i++)
    {
      if(boats[i])
      {
        Body.setVelocity(boats[i].body, {x:-1, y:0})
        boats[i].show()
        boats[i].animate()
      }
    }
  }
   
  else
  {
    var boat=new Ship(width, height-50, 170, 170, -80)
    boats.push(boat)
  }
}

function collisionBoat(i) //collision with Boat
{
  for(var j=0; j<boats.length; j++)
  {
    if(balls[i]!== undefined && boats[j]!== undefined)
    {
      var collision= Matter.SAT.collides(balls[i].body, boats[j].body)

      if(collision.collided)
      {
        boats[j].remove(j)
        Matter.World.remove(world, balls[i].body)
        delete balls[i]
      }
    }
  }
}