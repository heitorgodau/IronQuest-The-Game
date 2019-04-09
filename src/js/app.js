const gameScreen = document.getElementById('game-screen');
const ctx = gameScreen.getContext('2d');
const clear = () => ctx.clearRect(0,0, gameScreen.width, gameScreen.height);

let frames = 0;
let hero = new Hero('Iron');

window.addEventListener('keydown', event =>  {
  hero.moveHero(event)
  hero.speedUp(event);
  hero.attack(event);
});

const gameOver = () => console.log(gameOver);

const animate = () => {
  clear();
  hero.drawHero();
  createBugs();
  drawBugs();
  clearBugs();
  bugHit();
  frames += 1;
  window.requestAnimationFrame(animate);
}

animate();