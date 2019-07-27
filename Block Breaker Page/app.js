import Game from './Game';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const SCREEN_HEIGHT = 600;
const SCREEN_WIDTH = 800;

canvas.width = SCREEN_WIDTH;
canvas.height = SCREEN_HEIGHT;

const game = new Game(SCREEN_HEIGHT, SCREEN_WIDTH);

let lastTime = 0;

function gameLoop(timestamp) {
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  context.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  game.update(deltaTime);
  game.draw(context);

  requestAnimationFrame(gameLoop);
}

gameLoop(lastTime);
