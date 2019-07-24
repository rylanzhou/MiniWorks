class Ball {
  constructor({
    x, y, incrementY, incrementX, radius, color, friction,
  }) {
    this.x = x;
    this.y = y;
    this.incrementX = incrementX;
    this.incrementY = incrementY;
    this.radius = radius;
    this.color = color;
    // Each time the ball bounce back at a speed of .9 times the previous velocity
    this.friction = friction;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
  }

  update(context, canvasWidth, canvasHeight) {
    if (this.y + this.radius + this.incrementY > canvasHeight) {
      // Bounce back
      this.incrementY = -this.incrementY * this.friction;
    } else {
      // Accelerate
      this.incrementY += 1;
    }

    if (this.x + this.radius + this.incrementX > canvasWidth || this.x - this.radius + this.incrementX < 0) {
      // Bounce back
      this.incrementX = -this.incrementX;
    }
    this.x += this.incrementX;
    this.y += this.incrementY;
    this.draw(context);
  }
}

export default Ball;
