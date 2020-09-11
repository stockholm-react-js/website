export default function SineWaveSketch(p5) {
  p5.disableFriendlyErrors = true;

  let xspacing = 20; // Distance between each horizontal location
  let w; // Width of entire wave
  let theta = 0.0; // Start angle at 0
  let amplitude = 20.0; // Height of wave
  let period = 400.0; // How many pixels before the wave repeats
  let dx; // Value for incrementing x
  let dots = new Array(40); // Using an array to store height values for the wave
  let bgColor;

  p5.setup = () => {
    if (p5.windowWidth <= 600) {
      p5.createCanvas(p5.windowWidth, 150);
      dots = new Array(15);
    }

    if (p5.windowWidth > 700) {
      p5.createCanvas(p5.windowWidth - 10, 150);
      dots = new Array(30);
    }

    if (p5.windowWidth > 1200) {
      p5.createCanvas(p5.windowWidth - 10, 150);
      dots = new Array(55);
    }

    if (p5.windowWidth > 1400) {
      p5.createCanvas(p5.windowWidth - 10, 150)
      dots = new Array(70);
    }

    p5.colorMode(p5.HSB);
    w = p5.width / 2;
    dx = (p5.TWO_PI / period) * xspacing;
  }

  p5.draw = () => {
    bgColor = p5.color('#131313');
    p5.background(bgColor);
    calcWave();
    renderWave();
  }

  p5.windowResized = () => {
    if (p5.windowWidth <= 600) {
      p5.resizeCanvas(p5.windowWidth, 150);
      dots = new Array(15);
    }

    if (p5.windowWidth > 700) {
      p5.resizeCanvas(p5.windowWidth - 10, 150);
      dots = new Array(30);
    }

    if (p5.windowWidth > 1200) {
      p5.resizeCanvas(p5.windowWidth - 10, 150);
      dots = new Array(55);
    }

    if (p5.windowWidth > 1400) {
      p5.resizeCanvas(p5.windowWidth - 10, 150)
      dots = new Array(70);
    }
  }

  function calcWave() {
    theta += 0.01;
    // For every x value, calculate a y value with sine function
    let x = theta;
    for (let i = 0; i < dots.length; i++) {
      dots[i] = p5.sin(x) * amplitude;
      x += dx;
    }
  }

  function renderWave() {
    let t = p5.mouseX * 0.01 / p5.width;
    p5.translate((p5.width - (dots.length - 1) * xspacing) / 2, (p5.height - 9 * xspacing) / 2);
    p5.noStroke();
    p5.strokeWeight(2);
    p5.randomSeed(1);
    for (let x = 0; x < dots.length; x++) {
      p5.fill(p5.random(100, 300), 40, 90);
      p5.circle(x * xspacing, p5.height / 2 + dots[x], 14);
    }
  }
}