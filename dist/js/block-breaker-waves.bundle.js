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

var InputHandler = function InputHandler(paddle) {
  _classCallCheck(this, InputHandler);

  document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
      case 37:
        paddle.moveLeft();
        break;
      case 39:
        paddle.moveRight();
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
  function Paddle(screenHeight, screenWidth) {
    _classCallCheck(this, Paddle);

    this.screenWidth = screenHeight;

    this.width = 150;
    this.height = 30;

    this.position = {
      x: screenWidth / 2 - this.width / 2,
      y: screenHeight - this.height - 10
    };

    this.maxSpeed = 10;
    this.currentSpeed = 0;
  }

  _createClass(Paddle, [{
    key: 'draw',
    value: function draw(context) {
      context.fillStyle = 'blue';
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


var _Paddle = __webpack_require__(/*! ./Paddle */ "./Block Breaker Page/Paddle.js");

var _Paddle2 = _interopRequireDefault(_Paddle);

var _InputHandler = __webpack_require__(/*! ./InputHandler */ "./Block Breaker Page/InputHandler.js");

var _InputHandler2 = _interopRequireDefault(_InputHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var SCREEN_HEIGHT = 600;
var SCREEN_WIDTH = 800;

canvas.width = SCREEN_WIDTH;
canvas.height = SCREEN_HEIGHT;

var paddle = new _Paddle2.default(SCREEN_HEIGHT, SCREEN_WIDTH);
var inputHandler = new _InputHandler2.default(paddle);

document.addEventListener('keydown', function (event) {
  console.log('here');
  switch (event.keyCode) {
    case 37:
      paddle.moveLeft();
      break;
    case 39:
      paddle.moveRight();
      break;
    default:
  }
});

paddle.draw(context);

var lastTime = 0;

function gameLoop(timestamp) {
  var deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  context.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  paddle.update(deltaTime);
  paddle.draw(context);

  requestAnimationFrame(gameLoop);
}

gameLoop(lastTime);

/***/ })

/******/ });
//# sourceMappingURL=block-breaker-waves.bundle.js.map