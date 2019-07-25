import * as dat from 'dat.gui';

const gui = new dat.GUI();

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const wave = {
  y: canvas.height / 2,
  length: 0.01,
  amplitude: 100,
  frequency: 0.01,
};

const strokeColor = {
  h: 200,
  s: 50,
  l: 50,
};

const backgroundColor = {
  r: 0,
  g: 0,
  b: 0,
  a: 0.01,
};

const waveFolder = gui.addFolder('wave');
waveFolder.add(wave, 'y', 0, canvas.height);
waveFolder.add(wave, 'length', -0.01, 0.01);
waveFolder.add(wave, 'amplitude', -300, 300);
waveFolder.add(wave, 'frequency', -0.01, 1);

const strokeFolder = gui.addFolder('stroke');
strokeFolder.add(strokeColor, 'h', 0, 255);
strokeFolder.add(strokeColor, 's', 0, 100);
strokeFolder.add(strokeColor, 'l', 0, 100);

const backgroundFoloder = gui.addFolder('background color');
backgroundFoloder.add(backgroundColor, 'r', 0, 255);
backgroundFoloder.add(backgroundColor, 'g', 0, 255);
backgroundFoloder.add(backgroundColor, 'b', 0, 255);
backgroundFoloder.add(backgroundColor, 'a', 0, 1);

let increment = wave.frequency;
function animate() {
  requestAnimationFrame(animate);
  // context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.beginPath();
  context.moveTo(0, canvas.height / 2);

  for (let i = 0; i < canvas.width; i++) {
    // Amplitude * sin(Wavelength * x + frequency)
    context.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment));
  }
  context.strokeStyle = `hsl(${strokeColor.h}, ${strokeColor.s}%, ${strokeColor.l}%)`;
  context.stroke();
  increment += wave.frequency;
}

animate();
