const gameScreen = document.getElementById('game-screen');
const ctx = gameScreen.getContext('2d');
const clear = () => ctx.clearRect(0,0, gameScreen.width, gameScreen.height);

let hero = new Hero('Iron');

window.addEventListener('keydown', event =>  {
  hero.moveHero(event)
  hero.speedUp(event);
});

const animate = () => {
  clear();
  hero.drawHero();
  offscreenBuffering.drawHero()
  window.requestAnimationFrame(animate);
}

animate();