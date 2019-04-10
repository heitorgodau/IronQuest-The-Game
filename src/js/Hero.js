class Hero{
  constructor(name){
    this.name = name;
    this.img = new Image();
    this.size = 50;
    this.posX = (gameScreen.width/2) - this.size/2;
    this.posY = (gameScreen.height/2) - this.size/2;
    this.hp = 15;
    this.str = 20;
    this.speed = this.size/2;
    this.score = 0
    //this.attackImg = new Image();
    this.direction = 'up'
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
    this.img.src = 'src/img/hero-positions.png';
    switch(this.direction){
      case 'up':
        ctx.drawImage(this.img, 96, 0, 32, 32, this.posX, this.posY, this.size, this.size);
        break;
      case 'right':
        ctx.drawImage(this.img, 64, 0, 32, 32, this.posX, this.posY, this.size, this.size);
        break;
      case 'down':
        ctx.drawImage(this.img, 0, 0, 32, 32, this.posX, this.posY, this.size, this.size);        
        break;
      case 'left':
        ctx.drawImage(this.img, 32, 0, 32, 32, this.posX, this.posY, this.size, this.size);
        break;
    }
  }
  speedUp(e){
    e.shiftKey ? this.speed = this.size : this.speed = this.size/2;
  }

  moveHero(e){
    switch(e.keyCode){
      case 37:
        this.posX > 0 ? this.posX -= this.speed : this.posX = 0;
        this.direction = 'left';
        break;
      case 38:
        this.posY > 0 ? this.posY -= this.speed : this.posY = 0;
        this.direction = 'up';
        break;
      case 39:
        this.posX < 750 ? this.posX += this.speed : this.posX = 750;
        this.direction = 'right';
        break;
      case 40:
        this.posY < 450 ? this.posY += this.speed : this.posY = 450;
        this.direction = 'down';
        break;
    }
  }
  heroHit(enemy){
    return (this.posX < enemy.posX + enemy.size) && (this.posX + this.size > enemy.posX) && (this.posY < enemy.posY + enemy.size) && (this.posY + this.size > enemy.posY);
  }
  attack(enemy){
    return (this.posX - this.size / 2 < enemy.posX + enemy.size) && (this.posX + this.size * 1.5 > enemy.posX) && (this.posY - this.size / 2 < enemy.posY + enemy.size) && (this.posY + this.size * 1.5 > enemy.posY);
  }
  /* attackAnimation(){
     let x = 0;
     this.attackImg.src = 'src/img/attack-sprite-sheet.png';
     while( x <= 300 ){
       clear();
       ctx.drawImage(this.attackImg, x, 0, 50, 50, this.posX, this.posY, 50, 50);
       x += 50;
     }
   }*/
}