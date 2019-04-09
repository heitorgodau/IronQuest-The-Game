class Hero{
  constructor(name){
    this.name = name;
    this.img = new Image();
    this.size = 50;
    this.posX = (gameScreen.width/2) - this.size/2;
    this.posY = (gameScreen.height/2) - this.size/2;
    this.hp = 15;
    this.str = this.hp/3;
    this.speed = this.size/2;
    this.score = 0
  }
  getScore(){
    ctx.font = '30px Impact'
    ctx.fillStyle = '#72BF8C'
    ctx.fillText(`Score: ${this.score}`, 180, 40)    
  }
  getHP(){
    ctx.font = '30px Impact'
    ctx.fillStyle = 'tomato'
    ctx.fillText(`HP: ${this.hp}pts`, 20, 40)
  }
  drawHero(){
    this.img.src = 'src/img/hero.png';
    ctx.drawImage(this.img,this.posX, this.posY, this.size, this.size);
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
  heroHit(enemy){
    return (this.posX < enemy.posX + enemy.size) && (this.posX + this.size > enemy.posX) && (this.posY < enemy.posY + enemy.size) && (this.posY + this.size > enemy.posY);
  }
  attack(enemy){
    return (this.posX - this.size / 2 < enemy.posX + enemy.size) && (this.posX + this.size * 1.5 > enemy.posX) && (this.posY - this.size / 2 < enemy.posY + enemy.size) && (this.posY + this.size * 1.5 > enemy.posY);
  }
}