const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

const mouse = {
  x: undefined,
  y: undefined,
};

const colorArray = [
  '#98E9F2',
  '#36A5A5',
  '#FFD500',
  '#F28704',
  '#FF4F76',
];

/*
function basicDrawing() {
  // Rectangles
  context.fillStyle = 'rgba(255, 0, 0, 0.5)';
  context.fillRect(100, 100, 100, 100);
  context.fillStyle = 'rgba(0, 0, 255, 0.5)';
  context.fillRect(400, 100, 100, 100);
  context.fillStyle = 'rgba(0, 255, 0, 0.5)';
  context.fillRect(300, 300, 100, 100);

  // Lines
  context.beginPath();
  context.moveTo(50, 300);
  context.lineTo(300, 100);
  context.lineTo(400, 300);
  // Add stroke color
  context.strokeStyle = '#fa34a3';
  context.stroke();

  // Arc / Circle
  context.beginPath();
  context.arc(300, 300, 30, 0, Math.PI * 2, false);
  context.strokeStyle = 'blue';
  context.stroke();

  // Generate Circles using for-loop
  for (let i = 0; i < 3; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    context.beginPath();
    context.arc(x, y, 30, 0, Math.PI * 2, false);
    context.stroke();
  }
}
*/

class Circle {
  constructor({
    x, y, incrementX, incrementY, radius, color,
  }) {
    this.x = x;
    this.y = y;
    this.incrementX = incrementX;
    this.incrementY = incrementY;
    this.radius = radius;
    this.minRadius = radius;
    this.color = color;
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.color;
    context.fill();
  }

  update() {
    // Make the circle bounce
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.incrementX = -this.incrementX;
    }

    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.incrementY = -this.incrementY;
    }

    this.x += this.incrementX;
    this.y += this.incrementY;

    // Interactivity
    if (Math.abs(mouse.x - this.x) < 50 && Math.abs(mouse.y - this.y) < 50) {
      this.radius = Math.min(this.radius + 1, Circle.maxRadius);
    } else {
      this.radius = Math.max(this.radius - 1, this.minRadius);
    }
    this.draw();
  }
}

Circle.maxRadius = 60;

let circleArray = [];

function drawWithAnimate() {
  requestAnimationFrame(drawWithAnimate);

  // Clear the canvas
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (const circle of circleArray) {
    circle.update();
  }
}

function generateCircles() {
  circleArray = [];

  const radius = 30;
  // Generate multiple circles with for-loop
  for (let i = 0; i < 800; i++) {
    circleArray.push(
      new Circle({
        // Random initial position and prevent the circle from generate out of the boundary
        x: Math.random() * (window.innerWidth - radius * 2) + radius,
        y: Math.random() * (window.innerHeight - radius * 2) + radius,
        // Random velocity
        incrementX: (Math.random() - 0.5) * 8,
        incrementY: (Math.random() - 0.5) * 8,
        radius: Math.random() * 3 + 1,
        color: colorArray[Math.floor(Math.random() * colorArray.length)],
      }),
    );
  }
}

generateCircles();
drawWithAnimate();

window.onmousemove = (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
};

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  generateCircles();
});
