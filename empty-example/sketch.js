var height,width,size,snake,food,rows,cols,scale;
function setup() {
  // put setup code here
  height=600;
  width=600;
  scale=30;
  rows=height/scale;
  cols=width/scale;
  size=rows;
  snake=new Snake();
  food=new Food();
  food.pickLocation();
  createCanvas(width,height);
}

function draw() {
  // put drawing code here
  frameRate(8);
  background(257);
  food.show();
  snake.show();
  snake.update();
  snake.hasEaten();
  snake.death();
}

function keyPressed()
{
  if(keyCode == UP_ARROW)
  {
    snake.xSpeed=0;
    snake.ySpeed=-1;
  }

  if(keyCode == DOWN_ARROW)
  {
    snake.xSpeed=0;
    snake.ySpeed=1;
  }

  if(keyCode == RIGHT_ARROW)
  {
    snake.xSpeed=1;
    snake.ySpeed=0;
  }

  if(keyCode == LEFT_ARROW)
  {
    snake.xSpeed=-1;
    snake.ySpeed=0;
  }

}
function mousePressed()
{
  snake.total++;
}
