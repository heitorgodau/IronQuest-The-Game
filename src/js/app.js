const gameScreen = document.getElementById('game-screen');
const ctx = gameScreen.getContext('2d');
const clear = () => ctx.clearRect(0,0, gameScreen.width, gameScreen.height);

let frames = 0;
let pause = true;
let hero = new Hero('Iron');


window.addEventListener('keydown', event =>  {
  hero.moveHero(event)
  hero.speedUp(event);
  pauseGame(event);
  if(event.keyCode === 17){
    bugDamage();
  }
});

const gameOver = () => {
  pause = true;
  clear();
  ctx.font = '120px Impact'
  ctx.fillStyle = '#C73E1D'
  ctx.fillText('GAME OVER', 125, 275);
  ctx.font = '80px Impact'
  ctx.fillStyle = '#72BF8C'
  ctx.fillText(`Your Score: ${hero.score}`, 110, 375);
};

const pauseGame = event => {
  if (event.keyCode === 13){
    ctx.font = '120px Impact'
    ctx.fillStyle = '#A1BDF0'
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
    hero.getHP();
    hero.getScore();
  }
  frames += 1;
  window.requestAnimationFrame(animate);
}

  animate();