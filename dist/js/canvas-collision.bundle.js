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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Canvas Collision Page/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Canvas Collision Page/Circle.js":
/*!*****************************************!*\
  !*** ./Canvas Collision Page/Circle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function () {
  function Circle(_ref) {
    var x = _ref.x,
        y = _ref.y,
        radius = _ref.radius,
        color = _ref.color;

    _classCallCheck(this, Circle);

    this.x = x;
    this.y = y;
    this.velocity = {
      x: (Math.random() - 0.5) * 5,
      y: (Math.random() - 0.5) * 5
    };
    this.radius = radius;
    this.color = color;
    this.mass = 1;
    this.opacity = 0;
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw(context) {
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
  }, {
    key: "update",
    value: function update(context) {
      var particles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var getDistance = arguments[2];
      var innerWidth = arguments[3];
      var innerHeight = arguments[4];
      var mouse = arguments[5];

      this.draw(context);

      // Collision Detection
      for (var i = 0; i < particles.length; i++) {
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
  }, {
    key: "resolveCollision",
    value: function resolveCollision(otherParticle) {
      var xVelocityDiff = this.velocity.x - otherParticle.velocity.x;
      var yVelocityDiff = this.velocity.y - otherParticle.velocity.y;

      var xDist = otherParticle.x - this.x;
      var yDist = otherParticle.y - this.y;

      // Prevent accidental overlap of particles
      if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
        // Grab angle between the two colliding particles
        var angle = -Math.atan2(otherParticle.y - this.y, otherParticle.x - this.x);

        // Store mass in var for better readability in collision equation
        var m1 = this.mass;
        var m2 = otherParticle.mass;

        // Velocity before equation
        var u1 = Circle.rotate(this.velocity, angle);
        var u2 = Circle.rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        var v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        var v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        var vFinal1 = Circle.rotate(v1, -angle);
        var vFinal2 = Circle.rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        this.velocity.x = vFinal1.x;
        this.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;
      }
    }
  }], [{
    key: "rotate",
    value: function rotate(velocity, angle) {
      var rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
      };

      return rotatedVelocities;
    }
  }]);

  return Circle;
}();

exports.default = Circle;

/***/ }),

/***/ "./Canvas Collision Page/app.js":
/*!**************************************!*\
  !*** ./Canvas Collision Page/app.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Circle = __webpack_require__(/*! ./Circle */ "./Canvas Collision Page/Circle.js");

var _Circle2 = _interopRequireDefault(_Circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

var colorArray = ['#2185c5', '#7ecefd', '#fff6e5', '#ff7f66'];

var mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
};

function getDistance(x1, y1, x2, y2) {
  var xDistSquare = Math.pow(x1 - x2, 2);
  var yDistSquare = Math.pow(y1 - y2, 2);
  return Math.sqrt(xDistSquare + yDistSquare);
}

var particles = [];

function init() {
  particles = [];
  for (var i = 0; i < 100; i++) {
    var radius = 15;
    var color = colorArray[Math.floor(Math.random() * colorArray.length)];
    var currentCircle = new _Circle2.default({
      x: Math.random() * (window.innerWidth - 2 * radius) + radius,
      y: Math.random() * (window.innerHeight - 2 * radius) + radius,
      radius: radius,
      color: color
    });

    // To prevent overlapping
    if (i !== 0) {
      for (var j = 0; j < particles.length; j++) {
        if (getDistance(currentCircle.x, currentCircle.y, particles[j].x, particles[j].y) < currentCircle.radius * 2) {
          currentCircle = new _Circle2.default({
            x: Math.random() * (window.innerWidth - 2 * radius) + radius,
            y: Math.random() * (window.innerHeight - 2 * radius) + radius,
            radius: radius,
            color: color
          });
          j = -1;
        }
      }
    }

    particles.push(currentCircle);
  }
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(function (particle) {
    particle.update(context, particles, getDistance, window.innerWidth, window.innerHeight, mouse);
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
//# sourceMappingURL=canvas-collision.bundle.js.map