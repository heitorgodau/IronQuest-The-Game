const gameScreen = document.getElementById('game-screen');
const ctx = gameScreen.getContext('2d');
const clear = () => ctx.clearRect(0,0, gameScreen.width, gameScreen.height);

let frames = 0;
let pause = true;
let hero = new Hero('Iron');

window.addEventListener('keydown', event =>  {
  hero.moveHero(event)
  hero.speedUp(event);
  //hero.attack(event);
  pauseGame(event);
});

const gameOver = () => {
  pause = true;
  clear();
  ctx.font = '120px Impact'
  ctx.fillStyle = '#ffa31a'
  ctx.fillText('GAME OVER', 125, 275);
};

const pauseGame = event => {
  if (event.keyCode === 13){
    ctx.font = '120px Impact'
    ctx.fillStyle = '#ffa31a'
    ctx.fillText('PAUSE', 250, 300);
    return pause = !pause;
  }
}

const animate = () => {
  if(pause === false){
    clear();
    hero.drawHero();
    createBugs();
    drawBugs();
    clearBugs();
    bugHit();
  }
  frames += 1;
  window.requestAnimationFrame(animate);
}

  animate();