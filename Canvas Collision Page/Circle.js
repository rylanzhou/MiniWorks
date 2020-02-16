class Circle {
  constructor({
    x, y, radius, color,
  }) {
    this.x = x;
    this.y = y;
    this.velocity = {
      x: (Math.random() - 0.5) * 5,
      y: (Math.random() - 0.5) * 5,
    };
    this.radius = radius;
    this.color = color;
    this.mass = 1;
    this.opacity = 0;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.save();
    // opacity
    context.globalAlpha = this.opacity;
    context.fillStyle = this.color;
    context.fill();
    context.restore();
    context.strokeStyle = this.color;
    context.stroke();
    context.closePath();
  }

  update(context, particles = [], getDistance, innerWidth, innerHeight, mouse) {
    this.draw(context);

    // Collision Detection
    for (let i = 0; i < particles.length; i++) {
      // Compare self with others
      if (this !== particles[i]) {
        // Has collided
        if (getDistance(this.x, this.y, particles[i].x, particles[i].y) < this.radius * 2) {
          this.resolveCollision(particles[i]);
        }
      }
    }

    if (this.x - this.radius < 0 || this.x + this.radius > innerWidth) {
      this.velocity.x = -this.velocity.x;
    }

    if (this.y - this.radius < 0 || this.y + this.radius > innerHeight) {
      this.velocity.y = -this.velocity.y;
    }

    // Mouse interactions
    if (getDistance(mouse.x, mouse.y, this.x, this.y) < 120 && this.opacity < 0.2) {
      this.opacity += 0.02;
    } else if (this.opacity > 0) {
      this.opacity = Math.max(0, this.opacity - 0.02);
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  static rotate(velocity, angle) {
    const rotatedVelocities = {
      x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
      y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
    };

    return rotatedVelocities;
  }

  resolveCollision(otherParticle) {
    const xVelocityDiff = this.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = this.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - this.x;
    const yDist = otherParticle.y - this.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
      // Grab angle between the two colliding particles
      const angle = -Math.atan2(otherParticle.y - this.y, otherParticle.x - this.x);

      // Store mass in var for better readability in collision equation
      const m1 = this.mass;
      const m2 = otherParticle.mass;

      // Velocity before equation
      const u1 = Circle.rotate(this.velocity, angle);
      const u2 = Circle.rotate(otherParticle.velocity, angle);

      // Velocity after 1d collision equation
      const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
      const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

      // Final velocity after rotating axis back to original location
      const vFinal1 = Circle.rotate(v1, -angle);
      const vFinal2 = Circle.rotate(v2, -angle);

      // Swap particle velocities for realistic bounce effect
      this.velocity.x = vFinal1.x;
      this.velocity.y = vFinal1.y;

      otherParticle.velocity.x = vFinal2.x;
      otherParticle.velocity.y = vFinal2.y;
    }
  }
}

export default Circle;
