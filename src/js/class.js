const gameScreen = document.getElementById('game-screen');
const ctx = gameScreen.getContext('2d');

class Hero{
  constructor(name){
    this.name = name;
    this.img = 'red';
    this.size = 50;
    this.posX = (gameScreen.width/2) - (this.size/2);
    this.posY = (gameScreen.height/2) - (this.size/2);
    this.hp = 15;
    this.str = 5;
    this.speed = 1;
  }
  creatHero(){
    ctx.fillStyle = this.img;
    ctx.fillRect(this.posX, this.posY, this.size, this.size);
    //console.log('olá')
  }
  speedUp(){
    window.addEventListener('keydown', ev => ev.keyCode === 16 ? this.speed = 1 : this.speed = 2);
  }
  moveHero(){
  window.addEventListener('keydown', ev => {
    switch(ev.keyCode){
      case 37:
        this.posX -= this.speed;
        console.log(this.posX, this.posY, this.speed);
        break;
      case 38:
        this.posY += this.speed;
        console.log(this.posX, this.posY, this.speed);
        break;
      case 39:
        this.posX += this.speed;
        console.log(this.posX, this.posY, this.speed);
        break;
      case 40:
        this.posY -= this.speed;
        console.log(this.posX, this.posY, this.speed);
    }
  })
 }  
}

const clear = () => ctx.clearRect(0,0, gameScreen.width, gameScreen.height);

let hero = new Hero(name);
const startGame = (name) => {
  hero.creatHero();
  hero.speedUp();
  hero.moveHero();
}

const animate = () => {
  clear();
  startGame('iron');
  window.requestAnimationFrame(animate);
}

animate();