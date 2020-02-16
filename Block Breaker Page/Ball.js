import detectCollision from './collisionDetection';

class Ball {
  constructor(game) {
    this.game = game;
    this.image = document.querySelector('#ball');

    this.screenWidth = game.screenWidth;
    this.screenHeight = game.screenHeight;

    this.size = 16;
    this.position = {
      x: 10,
      y: 400,
    };
    this.speed = {
      x: 2,
      y: -2,
    };
  }

  reset() {
    this.position = {
      x: 10,
      y: 400,
    };
    this.speed = {
      x: 2,
      y: -2,
    };
  }

  draw(context) {
    context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
  }

  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // The ball hits the wall
    if (this.position.x + this.size > this.screenWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    // The ball hits the bottom
    if (this.position.y + this.size > this.screenHeight) {
      this.game.lives -= 1;
      this.reset();
    }

    // The ball hits paddle
    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
    }
  }
}

export default Ball;
