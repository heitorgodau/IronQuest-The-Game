class Hero{
  constructor(name){
    this.name = name;
    this.img = 'red';
    this.size = 50;
    this.posX = (gameScreen.width/2) - this.size/2;
    this.posY = (gameScreen.height/2) - this.size/2;
    this.hp = 15;
    this.str = this.hp/3;
    this.speed = this.size/2;
  }
  drawHero(){
    ctx.fillStyle = this.img;
    ctx.fillRect(this.posX, this.posY, this.size, this.size);
  }
  speedUp(e){
    e.shiftKey ? this.speed = this.size : this.speed = this.size/2;
  }

  moveHero(e){
    switch(e.keyCode){
      case 37:
        this.posX > 0 ? this.posX -= this.speed : this.posX = 0;
        break;
      case 38:
        this.posY > 0 ? this.posY -= this.speed : this.posY = 0;
        break;
      case 39:
        this.posX < 750 ? this.posX += this.speed : this.posX = 750;
        break;
      case 40:
        this.posY < 450 ? this.posY += this.speed : this.posY = 450;
        break;
    }
  }
}