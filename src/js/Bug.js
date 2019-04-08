const bugStore = []

class Bug{
  constructor(){
    this.img = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
    this.size = 25;
    this.posX = Math.floor(Math.random() * (gameScreen.width - this.size));
    this.posY = 0 - this.size * 2;
    this.hp = 15;
    this.str = this.hp/3;
    this.speed = 1;
  }
  draw(){
    this.posY += this.speed;
    ctx.fillStyle = this.img;
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.size, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
  }
}