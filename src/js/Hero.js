class Hero {
  constructor(name) {
    this.name = name;
    this.img = new Image();
    this.size = 50;
    this.posX = (gameScreen.width / 2) - this.size / 2;
    this.posY = (gameScreen.height / 2) - this.size / 2;
    this.hp = 15;
    this.str = 20;
    this.speed = this.size / 2;
    this.score = 0;
    this.direction = 'up';
  }

  getHP() {
    ctx.font = '20px Pixel';
    ctx.fillStyle = 'tomato';
    ctx.fillText(`HP: ${this.hp}`, 20, 40);
  }

  getScore() {
    ctx.font = '20px Pixel';
    ctx.fillStyle = '#72BF8C';
    ctx.fillText(`Score: ${this.score}`, 125, 40);
  }

  drawHero() {
    this.img.src = 'src/img/hero-positions.png';
    switch (this.direction) {
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
      default:
        ctx.drawImage(this.img, 96, 0, 32, 32, this.posX, this.posY, this.size, this.size);
    }
  }

  speedUp(e) {
    e.shiftKey ? this.speed = this.size : this.speed = this.size / 2;
  }

  moveHero(e) {
    switch (e.keyCode) {
      case 37:
        this.posX - this.speed > 0 ? this.posX -= this.speed : this.posX = 0;
        this.direction = 'left';
        break;
      case 38:
        this.posY - this.speed > 0 ? this.posY -= this.speed : this.posY = 0;
        this.direction = 'up';
        break;
      case 39:
        this.posX + this.speed < 750 ? this.posX += this.speed : this.posX = 750;
        this.direction = 'right';
        break;
      case 40:
        this.posY + this.speed < 450 ? this.posY += this.speed : this.posY = 450;
        this.direction = 'down';
        break;
      default:
        console.log(`${e.key} is not a valid key!`);
    }
  }

  heroHit(enemy) {
    return (this.posX < enemy.posX + enemy.size)
      && (this.posX + this.size > enemy.posX)
      && (this.posY < enemy.posY + enemy.size)
      && (this.posY + this.size > enemy.posY);
  }

  attack(enemy) {
    return (this.posX - this.size / 2 < enemy.posX + enemy.size)
    && (this.posX + this.size * 1.5 > enemy.posX)
    && (this.posY - this.size / 2 < enemy.posY + enemy.size)
    && (this.posY + this.size * 1.5 > enemy.posY);
  }
}
