/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Block Breaker Page/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Block Breaker Page/Ball.js":
/*!************************************!*\
  !*** ./Block Breaker Page/Ball.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collisionDetection = __webpack_require__(/*! ./collisionDetection */ "./Block Breaker Page/collisionDetection.js");

var _collisionDetection2 = _interopRequireDefault(_collisionDetection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ball = function () {
  function Ball(game) {
    _classCallCheck(this, Ball);

    this.game = game;
    this.image = document.querySelector('#ball');

    this.screenWidth = game.screenWidth;
    this.screenHeight = game.screenHeight;

    this.size = 16;
    this.position = {
      x: 10,
      y: 400
    };
    this.speed = {
      x: 2,
      y: -2
    };
  }

  _createClass(Ball, [{
    key: 'reset',
    value: function reset() {
      this.position = {
        x: 10,
        y: 400
      };
      this.speed = {
        x: 2,
        y: -2
      };
    }
  }, {
    key: 'draw',
    value: function draw(context) {
      context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }
  }, {
    key: 'update',
    value: function update() {
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
      if ((0, _collisionDetection2.default)(this, this.game.paddle)) {
        this.speed.y = -this.speed.y;
      }
    }
  }]);

  return Ball;
}();

exports.default = Ball;

/***/ }),

/***/ "./Block Breaker Page/Brick.js":
/*!*************************************!*\
  !*** ./Block Breaker Page/Brick.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collisionDetection = __webpack_require__(/*! ./collisionDetection */ "./Block Breaker Page/collisionDetection.js");

var _collisionDetection2 = _interopRequireDefault(_collisionDetection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Brick = function () {
  function Brick(game, position) {
    _classCallCheck(this, Brick);

    this.game = game;
    this.image = document.querySelector('#brick');

    this.position = position;

    this.width = 80;
    this.height = 24;

    this.markedForDeletion = false;
  }

  _createClass(Brick, [{
    key: 'update',
    value: function update() {
      if ((0, _collisionDetection2.default)(this.game.ball, this)) {
        this.game.ball.speed.y = -this.game.ball.speed.y;
        this.markedForDeletion = true;
      }
    }
  }, {
    key: 'draw',
    value: function draw(context) {
      context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Brick;
}();

exports.default = Brick;

/***/ }),

/***/ "./Block Breaker Page/Game.js":
/*!************************************!*\
  !*** ./Block Breaker Page/Game.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Paddle = __webpack_require__(/*! ./Paddle */ "./Block Breaker Page/Paddle.js");

var _Paddle2 = _interopRequireDefault(_Paddle);

var _Ball = __webpack_require__(/*! ./Ball */ "./Block Breaker Page/Ball.js");

var _Ball2 = _interopRequireDefault(_Ball);

var _InputHandler = __webpack_require__(/*! ./InputHandler */ "./Block Breaker Page/InputHandler.js");

var _InputHandler2 = _interopRequireDefault(_InputHandler);

var _levels = __webpack_require__(/*! ./levels */ "./Block Breaker Page/levels.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GAME_STATES = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
};

var Game = function () {
  function Game(screenHeight, screenWidth) {
    _classCallCheck(this, Game);

    this.screenHeight = screenHeight;
    this.screenWidth = screenWidth;

    this.paddle = null;
    this.ball = null;

    this.gameState = GAME_STATES.MENU;
    this.paddle = new _Paddle2.default(this);
    this.ball = new _Ball2.default(this);
    this.bricks = [];

    this.lives = null;
    this.levels = [_levels.level1, _levels.level2, _levels.level3];
    this.currentLevel = 0;
    this.gameObjects = [this.paddle, this.ball];
    // eslint-disable-next-line no-new
    new _InputHandler2.default(this.paddle, this);
  }

  _createClass(Game, [{
    key: 'start',
    value: function start() {
      if (this.gameState !== GAME_STATES.MENU && this.gameState !== GAME_STATES.GAMEOVER) {
        return;
      }
      this.lives = 1;
      this.currentLevel = 0;
      this.bricks = (0, _levels.buildLevel)(this, _levels.level1);

      this.gameState = GAME_STATES.RUNNING;
    }
  }, {
    key: 'draw',
    value: function draw(context) {
      [].concat(_toConsumableArray(this.gameObjects), _toConsumableArray(this.bricks)).forEach(function (object) {
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
  }, {
    key: 'update',
    value: function update(deltaTime) {
      if (this.lives === -1) {
        this.gameState = GAME_STATES.GAMEOVER;
      }
      if (this.gameState === GAME_STATES.PAUSED || this.gameState === GAME_STATES.MENU || this.gameState === GAME_STATES.GAMEOVER) {
        return;
      }

      // Switch to a new Level
      if (this.bricks.length === 0) {
        this.currentLevel++;
        this.bricks = (0, _levels.buildLevel)(this, this.levels[this.currentLevel]);
        this.ball.reset();
      }

      [].concat(_toConsumableArray(this.gameObjects), _toConsumableArray(this.bricks)).forEach(function (object) {
        object.update(deltaTime);
      });

      this.bricks = this.bricks.filter(function (object) {
        return !object.markedForDeletion;
      });
    }
  }, {
    key: 'togglePause',
    value: function togglePause() {
      if (this.gameState === GAME_STATES.PAUSED) {
        this.gameState = GAME_STATES.RUNNING;
      } else {
        this.gameState = GAME_STATES.PAUSED;
      }
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),

/***/ "./Block Breaker Page/InputHandler.js":
/*!********************************************!*\
  !*** ./Block Breaker Page/InputHandler.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputHandler = function InputHandler(paddle, game) {
  _classCallCheck(this, InputHandler);

  document.addEventListener('keydown', function (event) {
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
  document.addEventListener('keyup', function (event) {
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
};

exports.default = InputHandler;

/***/ }),

/***/ "./Block Breaker Page/Paddle.js":
/*!**************************************!*\
  !*** ./Block Breaker Page/Paddle.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Paddle = function () {
  function Paddle(game) {
    _classCallCheck(this, Paddle);

    this.screenWidth = game.screenWidth;

    this.width = 150;
    this.height = 20;

    this.position = {
      x: game.screenWidth / 2 - this.width / 2,
      y: game.screenHeight - this.height - 10
    };

    this.maxSpeed = 10;
    this.currentSpeed = 0;
  }

  _createClass(Paddle, [{
    key: 'draw',
    value: function draw(context) {
      context.fillStyle = 'lightblue';
      context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: 'update',
    value: function update(deltaTime) {
      if (!deltaTime) {
        return;
      }
      this.position.x += this.currentSpeed;

      if (this.position.x < 0) {
        this.position.x = 0;
      }
      if (this.position.x + this.width > this.screenWidth) {
        this.position.x = this.screenWidth - this.width;
      }
    }
  }, {
    key: 'moveLeft',
    value: function moveLeft() {
      this.currentSpeed = -this.maxSpeed;
    }
  }, {
    key: 'moveRight',
    value: function moveRight() {
      this.currentSpeed = this.maxSpeed;
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.currentSpeed = 0;
    }
  }]);

  return Paddle;
}();

exports.default = Paddle;

/***/ }),

/***/ "./Block Breaker Page/app.js":
/*!***********************************!*\
  !*** ./Block Breaker Page/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(/*! ./Game */ "./Block Breaker Page/Game.js");

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var SCREEN_HEIGHT = 600;
var SCREEN_WIDTH = 800;

canvas.width = SCREEN_WIDTH;
canvas.height = SCREEN_HEIGHT;

var game = new _Game2.default(SCREEN_HEIGHT, SCREEN_WIDTH);

var lastTime = 0;

function gameLoop(timestamp) {
  var deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  context.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  game.update(deltaTime);
  game.draw(context);

  requestAnimationFrame(gameLoop);
}

gameLoop(lastTime);

/***/ }),

/***/ "./Block Breaker Page/collisionDetection.js":
/*!**************************************************!*\
  !*** ./Block Breaker Page/collisionDetection.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detectCollision;
function detectCollision(ball, gameObject) {
  var bottomOfBall = ball.position.y + ball.size;
  var topOfBall = ball.position.y;

  var topOfObject = gameObject.position.y;
  var leftOfObject = gameObject.position.x;
  var rightOfObject = gameObject.position.x + gameObject.width;
  var bottomOfObject = gameObject.position.y + gameObject.height;

  if (bottomOfBall >= topOfObject && topOfBall <= bottomOfObject && ball.position.x >= leftOfObject && ball.position.x <= rightOfObject) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "./Block Breaker Page/levels.js":
/*!**************************************!*\
  !*** ./Block Breaker Page/levels.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.level3 = exports.level2 = exports.level1 = undefined;
exports.buildLevel = buildLevel;

var _Brick = __webpack_require__(/*! ./Brick */ "./Block Breaker Page/Brick.js");

var _Brick2 = _interopRequireDefault(_Brick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildLevel(game, level) {
  var bricks = [];

  level.forEach(function (row, rowIndex) {
    row.forEach(function (brick, brickIndex) {
      if (brick) {
        var position = {
          x: 80 * brickIndex,
          y: 75 + 24 * rowIndex
        };
        bricks.push(new _Brick2.default(game, position));
      }
    });
  });

  return bricks;
}

var level1 = exports.level1 = [
// [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 0]];

var level2 = exports.level2 = [[0, 1, 0, 0, 0, 1, 0, 0, 0, 1], [1, 1, 1, 0, 1, 1, 1, 0, 1, 1], [0, 1, 0, 0, 0, 1, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

var level3 = exports.level3 = [[0, 1, 0, 1, 0, 1, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

/***/ })

/******/ });
//# sourceMappingURL=block-breaker.bundle.js.map