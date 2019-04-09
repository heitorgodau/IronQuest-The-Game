const gameScreen = document.getElementById('game-screen');
const ctx = gameScreen.getContext('2d');
const clear = () => ctx.clearRect(0,0, gameScreen.width, gameScreen.height);
const gameOverSound = new Audio('src/audio/geme-over.mp3')
const bgSound = new Audio('src/audio/bg-sound2.mp3');
const heroAttackSound = new Audio('src/audio/hero-attack.mp3');
const bugAttackSound = new Audio('src/audio/bug-attack.mp3');
const bugDiedSound = new Audio('src/audio/bug-died.mp3');
const bugFleeSound = new Audio('src/audio/bug-flee.mp3');
//bgSound.play();

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

const gameMusic = () => {

}

const pauseGame = event => {
  if (event.keyCode === 13){
    ctx.font = '120px Impact'
    ctx.fillStyle = '#A1BDF0'
    ctx.fillText('PAUSE', 250, 300);
    bgSound.pause();
    return pause = !pause;
  }
}

const resetGame = () => {
  bugStore.splice(0,bugStore.length);
  frames = 0;
  hero = new Hero();
}

const gameOver = () => {
  bgSound.pause();
  gameOverSound.play();
  pause = true;
  clear();
  ctx.font = '120px Impact'
  ctx.fillStyle = '#C73E1D'
  ctx.fillText('GAME OVER', 125, 275);
  ctx.font = '80px Impact'
  ctx.fillStyle = '#72BF8C'
  ctx.fillText(`Your Score: ${hero.score}`, 110, 375);
  resetGame();
};


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
    frames += 1;
    bgSound.play();
  }
  window.requestAnimationFrame(animate);
}

  animate();