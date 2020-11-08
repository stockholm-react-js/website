export default function WobbleSketch(p5) {

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight - 132);


  }
  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight - 132);
  }

  p5.draw = () => {
    p5.background("#f5f5f5");
    p5.noStroke();
    p5.randomSeed(1);
    p5.translate(p5.width / 2, p5.height / 2);

    p5.fill(132, 204, 116);
    drawLiq(18, 400, 150, 150);

    p5.fill(211, 159, 222);
    drawLiq(18, 200, 100, 120);

    p5.fill(139, 211, 243);
    drawLiq(18, 500, 200, 100);


  }


  function drawLiq(vNnum, nm, sm, fcm) {
    p5.push();
    p5.rotate(p5.frameCount * 0.002);
    let dr = p5.TWO_PI / 18;
    p5.beginShape();
    for (let i = 0; i < vNnum + 5; i++) {
      let ind = i % vNnum;
      let rad = dr * ind;
      let r = p5.height * p5.constrain(p5.windowWidth * 0.0010, 0.7, 1) / 2.5 + p5.noise(p5.frameCount / nm + ind) * p5.height * 0.1 + p5.sin(p5.frameCount / sm + ind) * p5.height * 0.005;
      p5.curveVertex(p5.cos(rad) * r, p5.sin(rad) * r);
    }
    p5.endShape();
    p5.pop();
  }
}