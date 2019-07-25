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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Canvas Circular Motion Page/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Canvas Circular Motion Page/Particle.js":
/*!*************************************************!*\
  !*** ./Canvas Circular Motion Page/Particle.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Particle = function () {
  function Particle(_ref) {
    var x = _ref.x,
        y = _ref.y,
        radius = _ref.radius,
        color = _ref.color;

    _classCallCheck(this, Particle);

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
      y: Math.random() * 80 + 50
    };
    this.lastMousePosition = {
      x: this.centerX,
      y: this.centerY
    };
  }

  _createClass(Particle, [{
    key: "draw",
    value: function draw(context, lastPosition) {
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
  }, {
    key: "update",
    value: function update(context, mouse) {
      var lastPosition = {
        x: this.x,
        y: this.y
      };
      // To make the trail smooth when mouse moves
      this.lastMousePosition.x += (mouse.x - this.lastMousePosition.x) * 0.05;
      this.lastMousePosition.y += (mouse.y - this.lastMousePosition.y) * 0.05;

      this.radians += this.velocity;
      // To make the path a circle, cos and sin are both multiplied by distanceFromCenter.x
      this.x = this.lastMousePosition.x + Math.cos(this.radians) * this.distanceFromCenter.x;
      this.y = this.lastMousePosition.y + Math.sin(this.radians) * this.distanceFromCenter.x;
      this.draw(context, lastPosition);
    }
  }]);

  return Particle;
}();

exports.default = Particle;

/***/ }),

/***/ "./Canvas Circular Motion Page/app.js":
/*!********************************************!*\
  !*** ./Canvas Circular Motion Page/app.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Particle = __webpack_require__(/*! ./Particle */ "./Canvas Circular Motion Page/Particle.js");

var _Particle2 = _interopRequireDefault(_Particle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

var colorArray = ['#00bdff', '#4d39ce', '#088eff'];

var mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
};

var particles = [];

function init() {
  particles = [];
  for (var i = 0; i < 50; i++) {
    particles.push(new _Particle2.default({
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: Math.random() * 2 + 1,
      color: colorArray[Math.floor(Math.random() * colorArray.length)]
    }));
  }
}

function animate() {
  requestAnimationFrame(animate);
  // context.clearRect(0, 0, canvas.width, canvas.height);
  // To get the trail effect so we use fillRect instead of clearRect
  context.fillStyle = 'rgba(255, 255, 255, 0.05)';
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  particles.forEach(function (particle) {
    particle.update(context, mouse);
  });
}

window.addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

init();
animate();

/***/ })

/******/ });
//# sourceMappingURL=canvas-circular-motion.bundle.js.map