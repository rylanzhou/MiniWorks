import Circle from './Circle';

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

const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};

function getDistance(x1, y1, x2, y2) {
  const xDistSquare = (x1 - x2) ** 2;
  const yDistSquare = (y1 - y2) ** 2;
  return Math.sqrt(xDistSquare + yDistSquare);
}

let particles = [];

function init() {
  particles = [];
  for (let i = 0; i < 100; i++) {
    const radius = 15;
    const color = colorArray[Math.floor(Math.random() * colorArray.length)];
    let currentCircle = new Circle({
      x: Math.random() * (window.innerWidth - 2 * radius) + radius,
      y: Math.random() * (window.innerHeight - 2 * radius) + radius,
      radius,
      color,
    });

    // To prevent overlapping
    if (i !== 0) {
      for (let j = 0; j < particles.length; j++) {
        if (getDistance(currentCircle.x, currentCircle.y, particles[j].x, particles[j].y) < currentCircle.radius * 2) {
          currentCircle = new Circle({
            x: Math.random() * (window.innerWidth - 2 * radius) + radius,
            y: Math.random() * (window.innerHeight - 2 * radius) + radius,
            radius,
            color,
          });
          j = -1;
        }
      }
    }

    particles.push(currentCircle);
  }
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update(context, particles, getDistance, window.innerWidth, window.innerHeight, mouse);
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
