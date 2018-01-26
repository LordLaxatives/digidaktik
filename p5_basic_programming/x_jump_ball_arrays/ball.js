/* Udviklet af Daniel Shiffman - http://patreon.com/codingtrain
Videre modificeret og udviklet til gymnasiebrug af Simon Moe 
*/

function Ball(x, y, size) {
    this.y = y;
    this.x = x;
    this.xspeed = 0;
    this.size = size;
    this.col = [random(80,100), random(80,100), random(80,100)];
    
    this.gravity = this.size * .02;
    this.velocity = 0;
    this.friction = .995;
    this.lift = 15;

  this.show = function() {
    fill(this.col);
    ellipse(this.x, this.y, this.size, this.size);
  }

  this.update = function() {      
      this.velocity += this.gravity;
      this.velocity *= this.friction;
      this.y += this.velocity;
      
      if(this.y > height-this.size/2){
          this.y = height-this.size/2;
          this.velocity = -this.velocity;
      }
  }

  this.up = function() {
      this.velocity -= this.lift;
  }
 
}

/*



*/
