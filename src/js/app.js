const gameScreen = document.getElementById('game-screen');
const ctx = gameScreen.getContext('2d');
const gameOverSound = new Audio('src/audio/geme-over.mp3');
const bgSound = new Audio('src/audio/bg-sound2.mp3');
const heroAttackSound = new Audio('src/audio/hero-attack.mp3');
const bugAttackSound = new Audio('src/audio/bug-attack.mp3');
const bugDiedSound = new Audio('src/audio/bug-died.mp3');
const bugFleeSound = new Audio('src/audio/bug-flee.mp3');

let frames = 0;
let pause = true;
let hero = new Hero('Iron');

window.addEventListener('keydown', (event) => {
  hero.moveHero(event);
  hero.speedUp(event);
  pauseGame(event);
  if (event.keyCode === 17) {
    bugDamage();
  }
});

const changeTitleColor = () => {
  if (frames % 60 === 0) {
    document.querySelector('.title h1').style.color = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
  }
};

const clear = () => ctx.clearRect(0, 0, gameScreen.width, gameScreen.height);

const pauseGame = (event) => {
  if (event.keyCode === 13) {
    ctx.font = '80px Pixel';
    ctx.fillStyle = '#A1BDF0';
    ctx.fillText('PAUSE', 210, 300);
    bgSound.pause();
    return pause = !pause;
  }
};

const resetGame = () => {
  bugStore.splice(0, bugStore.length);
  frames = 0;
  hero = new Hero();
};

const gameOver = () => {
  gameOverSound.play();
  pause = true;
  clear();
  ctx.font = '60px Pixel';
  ctx.fillStyle = '#C73E1D';
  ctx.fillText('GAME OVER', 125, 250);
  ctx.font = '40px Pixel';
  ctx.fillStyle = '#72BF8C';
  ctx.fillText(`Your Score: ${hero.score}`, 125, 325);
  resetGame();
};

// ENGINE
const animate = () => {
  if (pause === false) {
    clear();
    hero.drawHero();
    createBugs();
    drawBugs();
    clearBugs();
    bugHit();
    bugLifeBar();
    hero.getHP();
    hero.getScore();
    bgSound.play();
  }
  frames += 1;
  changeTitleColor();
  window.requestAnimationFrame(animate);
};

animate();
