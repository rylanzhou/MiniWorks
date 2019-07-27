class InputHandler {
  constructor(paddle, game) {
    document.addEventListener('keydown', (event) => {
      console.log(event.keyCode);
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          break;
        case 39:
          paddle.moveRight();
          break;
        // Space key
        case 32:
          game.togglePause();
          break;
        // G key
        case 71:
          game.start();
          break;
        // R key
        case 82:
          game.start();
          break;
        default:
      }
    });
    document.addEventListener('keyup', (event) => {
      switch (event.keyCode) {
        case 37:
          // Stop when it's moving left
          if (paddle.currentSpeed < 0) {
            paddle.stop();
          }
          break;
        case 39:
          // Stop when it's moving right
          if (paddle.currentSpeed > 0) {
            paddle.stop();
          }
          break;
        default:
      }
    });
  }
}

export default InputHandler;
