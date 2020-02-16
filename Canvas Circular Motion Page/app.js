import Particle from './Particle';

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

const colorArray = [
  '#00bdff',
  '#4d39ce',
  '#088eff',
];

const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};

let particles = [];

function init() {
  particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle({
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: Math.random() * 2 + 1,
      color: colorArray[Math.floor(Math.random() * colorArray.length)],
    }));
  }
}

function animate() {
  requestAnimationFrame(animate);
  // context.clearRect(0, 0, canvas.width, canvas.height);
  // To get the trail effect so we use fillRect instead of clearRect
  context.fillStyle = 'rgba(255, 255, 255, 0.05)';
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  particles.forEach((particle) => {
    particle.update(context, mouse);
  });
}

window.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

init();
animate();
