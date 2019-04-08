class Bug{
  constructor(){
    this.img = Math.floor(Math.random() * 16777216).toString(16);
    this.size = 50;
    this.posX = (gameScreen.width/2) - this.size/2;
    this.posY = (gameScreen.height/2) - this.size/2;
    this.hp = 15;
    this.str = this.hp/3;
    this.speed = this.size/2;
  }
}