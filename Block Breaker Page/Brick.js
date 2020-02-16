import detectCollision from './collisionDetection';

class Brick {
  constructor(game, position) {
    this.game = game;
    this.image = document.querySelector('#brick');

    this.position = position;

    this.width = 80;
    this.height = 24;

    this.markedForDeletion = false;
  }

  update() {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.markedForDeletion = true;
    }
  }

  draw(context) {
    context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }
}

export default Brick;
