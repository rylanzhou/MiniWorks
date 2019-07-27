import Paddle from './Paddle';
import Ball from './Ball';
import InputHandler from './InputHandler';
import {
  buildLevel, level1, level2, level3,
} from './levels';

const GAME_STATES = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
};

class Game {
  constructor(screenHeight, screenWidth) {
    this.screenHeight = screenHeight;
    this.screenWidth = screenWidth;

    this.paddle = null;
    this.ball = null;

    this.gameState = GAME_STATES.MENU;
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.bricks = [];

    this.lives = null;
    this.levels = [level1, level2, level3];
    this.currentLevel = 0;
    this.gameObjects = [this.paddle, this.ball];
    // eslint-disable-next-line no-new
    new InputHandler(this.paddle, this);
  }

  start() {
    if (this.gameState !== GAME_STATES.MENU && this.gameState !== GAME_STATES.GAMEOVER) {
      return;
    }
    this.lives = 1;
    this.currentLevel = 0;
    this.bricks = buildLevel(this, level1);

    this.gameState = GAME_STATES.RUNNING;
  }

  draw(context) {
    [...this.gameObjects, ...this.bricks].forEach((object) => {
      object.draw(context);
    });

    if (this.gameState === GAME_STATES.PAUSED) {
      context.rect(0, 0, this.screenWidth, this.screenHeight);
      context.fillStyle = 'rgba(0, 0, 0, 0.5)';
      context.fill();

      context.font = '30px Montserrat';
      context.fillStyle = 'white';
      context.textAlign = 'center';
      context.fillText('Press SPACEBAR to resume', this.screenWidth / 2, this.screenHeight / 2);
    }

    if (this.gameState === GAME_STATES.MENU) {
      context.rect(0, 0, this.screenWidth, this.screenHeight);
      context.fillStyle = 'rgba(0, 0, 0, 1)';
      context.fill();

      context.font = '30px Montserrat';
      context.fillStyle = 'white';
      context.textAlign = 'center';
      context.fillText('Press G to start', this.screenWidth / 2, this.screenHeight / 2);
    }

    if (this.gameState === GAME_STATES.GAMEOVER) {
      context.rect(0, 0, this.screenWidth, this.screenHeight);
      context.fillStyle = 'rgba(0, 0, 0, 1)';
      context.fill();

      context.font = '30px Montserrat';
      context.fillStyle = 'white';
      context.textAlign = 'center';
      context.fillText('Game over! Press R to retry.', this.screenWidth / 2, this.screenHeight / 2);
    }
  }

  update(deltaTime) {
    if (this.lives === -1) {
      this.gameState = GAME_STATES.GAMEOVER;
    }
    if (this.gameState === GAME_STATES.PAUSED || this.gameState === GAME_STATES.MENU || this.gameState === GAME_STATES.GAMEOVER) {
      return;
    }

    // Switch to a new Level
    if (this.bricks.length === 0) {
      this.currentLevel++;
      this.bricks = buildLevel(this, this.levels[this.currentLevel]);
      this.ball.reset();
    }

    [...this.gameObjects, ...this.bricks].forEach((object) => {
      object.update(deltaTime);
    });

    this.bricks = this.bricks.filter(object => !object.markedForDeletion);
  }

  togglePause() {
    if (this.gameState === GAME_STATES.PAUSED) {
      this.gameState = GAME_STATES.RUNNING;
    } else {
      this.gameState = GAME_STATES.PAUSED;
    }
  }
}

export default Game;
