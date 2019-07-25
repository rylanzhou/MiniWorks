class Particle {
  constructor({
    x, y, radius, color,
  }) {
    this.x = x;
    this.centerX = x;
    this.y = y;
    this.centerY = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05;
    this.distanceFromCenter = {
      x: Math.random() * 80 + 50,
      y: Math.random() * 80 + 50,
    };
    this.lastMousePosition = {
      x: this.centerX,
      y: this.centerY,
    };
  }

  draw(context, lastPosition) {
    context.beginPath();
    // context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // context.fillStyle = this.color;
    // context.fill();
    // Since we use fillRect to refresh every frame, we don't have to draw out the entire circle arc but just a short line segment.
    context.lineWidth = this.radius;
    context.moveTo(lastPosition.x, lastPosition.y);
    context.lineTo(this.x, this.y);
    context.strokeStyle = this.color;
    context.stroke();
    context.closePath();
  }

  update(context, mouse) {
    const lastPosition = {
      x: this.x,
      y: this.y,
    };
    // To make the trail smooth when mouse moves
    this.lastMousePosition.x += ((mouse.x - this.lastMousePosition.x) * 0.05);
    this.lastMousePosition.y += ((mouse.y - this.lastMousePosition.y) * 0.05);

    this.radians += this.velocity;
    // To make the path a circle, cos and sin are both multiplied by distanceFromCenter.x
    this.x = this.lastMousePosition.x + Math.cos(this.radians) * this.distanceFromCenter.x;
    this.y = this.lastMousePosition.y + Math.sin(this.radians) * this.distanceFromCenter.x;
    this.draw(context, lastPosition);
  }
}

export default Particle;
