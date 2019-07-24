import Ball from './Ball';

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

const colorArray = [
  '#2185c5',
  '#7ecefd',
  '#fff6e5',
  '#ff7f66',
];

let ballArray = [];

function init() {
  ballArray = [];
  for (let i = 0; i < 50; i++) {
    const radius = Math.random() * 25 + 10;
    ballArray.push(new Ball({
      x: Math.random() * (window.innerWidth - 2 * radius) + radius,
      y: Math.random() * (window.innerHeight / 2 - 2 * radius) + radius,
      incrementX: Math.random() * 4 - 2,
      incrementY: Math.random() * 4 - 2,
      radius,
      color: colorArray[Math.floor(Math.random() * colorArray.length)],
      friction: 0.9,
    }));
  }
}

function animate() {
  requestAnimationFrame(animate);

  context.clearRect(0, 0, canvas.width, canvas.height);

  for (const ball of ballArray) {
    ball.update(context, canvas.width, canvas.height);
  }
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

init();
animate();
