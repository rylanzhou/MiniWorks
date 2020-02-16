class Paddle {
  constructor(game) {
    this.screenWidth = game.screenWidth;

    this.width = 150;
    this.height = 20;

    this.position = {
      x: game.screenWidth / 2 - this.width / 2,
      y: game.screenHeight - this.height - 10,
    };

    this.maxSpeed = 10;
    this.currentSpeed = 0;
  }

  draw(context) {
    context.fillStyle = 'lightblue';
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) { return; }
    this.position.x += this.currentSpeed;

    if (this.position.x < 0) {
      this.position.x = 0;
    }
    if (this.position.x + this.width > this.screenWidth) {
      this.position.x = this.screenWidth - this.width;
    }
  }

  moveLeft() {
    this.currentSpeed = -this.maxSpeed;
  }

  moveRight() {
    this.currentSpeed = this.maxSpeed;
  }

  stop() {
    this.currentSpeed = 0;
  }
}

export default Paddle;
