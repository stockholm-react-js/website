export default function SphereSketch(p5) {
  p5.disableFriendlyErrors = true;
  let sphereDetail = 10;
  let X, Y, Z, R;
  let targetX = 300;
  let targetY = 300;
  let targetZ = 300;
  let bg = p5.color('#131313');
  let r;
  let rotationSpeed;
  let x_, y_, z_;
  let age;
  let ageY;
  let N = 300;
  let scroll = 1;
  let spread = -0.3;
  let easing = 0.05;
  let x = 0;
  let y = 0;
  let z = 0;



  p5.setup = () => {
    if (p5.windowWidth <= 1000) {
      r = 200;
    } else {
      r = 290;
    }
    p5.createCanvas(1000, 1000, p5.WEBGL);
    p5.colorMode(p5.HSB);
    p5.rectMode(p5.CENTER);
    p5.noStroke();
  }

  function c01(g) {
    return p5.constrain(g, 0, 1);
  };

  p5.mouseWheel = (event) => {
    scroll = event.deltaY
    if (event.deltaY > 0) {
      spread = spread += p5.constrain(event.deltaY, 0, 0.02);
    }
    if (event.deltaY < 0) {
      spread = spread -= p5.constrain(-event.deltaY, 0, 0.02);
    }
    if (spread < -0.4) {
      spread = -0.4;
    }
    if (spread > 1.9) {
      spread = 1.9;
    }
    console.log(scroll)
    console.log(spread)
  }
  console.log(spread)
  function sphere_() {

    let t = scroll / 5000;
    //let spread = scroll += 0.00000;
    X = p5.randomGaussian() * 2;
    Y = p5.randomGaussian() * 2;
    Z = p5.randomGaussian() * 2;
    //r = scroll += 0.001;
    R = p5.dist(0, 0, 0, X, Y, Z);
    x_ = X * r / R;
    y_ = Y * r / R;
    z_ = Z * r / R;

    age = (t + 1000 - 0.0016 * targetX + p5.randomGaussian() * 0.18) % 1;
    ageY = (t + 1000 - 0.0016 * targetX * p5.randomGaussian() * 0.18) % 1;

    age = c01(1.9 * age);
    ageY = c01(1.9 * ageY);

    targetX = x_ * p5.cos(spread / 2) + x_ * p5.sin(spread) / 2;

    targetY = y_ * p5.cos(spread / 2) + y_ * p5.sin(spread) / 2;
    targetZ = z_ * p5.cos(spread / 2) - z_ * p5.sin(spread) / 2;
    let dx = targetX - x;
    console.log(dx)
    let dy = targetY - y;
    let dz = targetZ - z;
    x += dx * easing;
    y += dy * easing;
    z += dz * easing;
    p5.push();
    p5.translate(targetX, targetY, targetZ);
    p5.fill(p5.random(100, 300), 40, 90);
    p5.sphere(p5.map(p5.cos(p5.TWO_PI * age), 1, -1, 0, 18), sphereDetail, sphereDetail);
    p5.pop();

  }

  p5.draw = () => {
    p5.background(bg);
    p5.rotateZ(p5.millis() / 100000);
    p5.rotateY(p5.millis() / 100000);
    p5.push();
    p5.randomSeed(1);
    for (let i = 0; i < N; i++)
      sphere_();
    p5.pop();
  }

}