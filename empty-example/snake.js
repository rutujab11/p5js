class Snake
{
  constructor()
  {
    this.x=rows*floor(random(scale));
    this.y=cols*floor(random(scale));
    this.xSpeed=1;
    this.ySpeed=0;
    this.total=0;
    this.tail=[];
  }
  show()
  {
    fill(0, 50, 80);
    rectMode(CENTER);
    for(var i=0; i < this.tail.length; i++)
    {
      rect(this.tail[i].x, this.tail[i].y, size, size);
    }
    rect(this.x, this.y, size, size);
  }

  hasEaten()
  {
    var d=dist(this.x,this.y,food.x,food.y);
    if(d < 1)
    {
      food.pickLocation();
      this.total++;
    }
  }

  death()
  {
    for(var i=0; i < this.tail.length; i++)
    {
      var d=dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
      if(d < 1)
      {
        alert("Your score is:"+(this.total+1));
        this.tail=[];
        this.total=0;
      }
    }
  }
  update()
  {
    for(var i=0; i < this.tail.length -1; i++)
    {
      this.tail[i] = this.tail[i+1];
    }

    if(this.total > 0)
    {
      this.tail[this.total -1]=createVector(this.x,this.y);
    }
    this.x=this.x + this.xSpeed*size;
    this.y=this.y + this.ySpeed*size;

    if(this.x > width)
    this.x=0;

    if(this.x < 0)
    this.x=width;

    if(this.y > height)
    this.y=0;

    if(this.y < 0)
    this.y=height;
  }
}

class Food
{
  constructor()
  {
    this.x=300;
    this.y=300;
  }

  show()
  {
    fill(255, 255, 0);
    rectMode(CENTER);
    rect(this.x, this.y, size, size);
  }

  pickLocation()
  {
    this.x=rows*floor(random(scale));
    this.y=cols*floor(random(scale));

  }
}
