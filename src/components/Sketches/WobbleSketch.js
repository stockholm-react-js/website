export default function WobbleSketch(p5) {

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.colorMode(p5.HSB);

  }
  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    console.log(p5.constrain(p5.windowWidth * 0.001, 0, 1))
  }

  p5.draw = () => {
    p5.blendMode(p5.BLEND);
    p5.background("#f5f5f5");
    //noStroke();
    /* p5.blendMode(p5.MULTIPLY); */
    p5.noStroke();
    p5.randomSeed(1);
    p5.translate(p5.width / 2, p5.height / 2);
    p5.fill(p5.random(100, 300), 40, 90);
    drawLiq(18, 500, 200, 100);
    p5.fill(300, 40, 90);
    drawLiq(18, 200, 100, 120);
    p5.fill(200, 40, 90);
    drawLiq(18, 400, 150, 150);
  }


  function drawLiq(vNnum, nm, sm, fcm) {
    p5.push();
    //p5.rotate(p5.frameCount * 0.005);
    let dr = p5.TWO_PI / vNnum;
    p5.beginShape();
    for (let i = 0; i < vNnum + 5; i++) {
      let ind = i % vNnum;
      let rad = dr * ind;
      let r = p5.height * p5.constrain(p5.windowWidth * 0.001, 0, 1) / 3 + p5.noise(p5.frameCount / nm + ind) * p5.height * 0.1 + p5.sin(p5.frameCount / sm + ind) * p5.height * 0.005;
      p5.curveVertex(p5.cos(rad) * r, p5.sin(rad) * r);
    }
    p5.endShape();
    p5.pop();
  }
}