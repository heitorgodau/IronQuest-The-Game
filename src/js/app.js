const gameScreen = document.getElementById('game-screen');
const ctx = gameScreen.getContext('2d');
const clear = () => ctx.clearRect(0,0, gameScreen.width, gameScreen.height);

let frames = 0;
let hero = new Hero('Iron');
let bugs = new Bug();

window.addEventListener('keydown', event =>  {
  hero.moveHero(event)
  hero.speedUp(event);
});

const createBugs = () => {
  if(frames % 120 === 0){
    bugStore.push(new Bug);
  }
};

const drawBugs = () => bugStore.forEach( enemy => enemy.draw());

const animate = () => {
  clear();
  hero.drawHero();
  createBugs();
  drawBugs();
  frames += 1;
  window.requestAnimationFrame(animate);
}

animate();