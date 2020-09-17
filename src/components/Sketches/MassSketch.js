export default function MassSketch(p5) {


  let particles = [];
  let MAX_PARTICLE_COUNT = 100;
  let viscosity;
  let circleValue = 350;
  let massMultiplier = 1000;

  p5.setup = () => {
    if (p5.windowWidth <= 500) {
      massMultiplier = 700;
      circleValue = 250;
    }
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.noStroke();
    p5.color(p5.random(100, 300), 40, 90)
    viscosity = 0.1;
    p5.colorMode(p5.HSB)
  }

  /* p5.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.circleValue !== null) return circleValue = props.circleValue;
    if (props.massMultiplier !== null) return massMultiplier = props.massMultiplier;
  }; */



  p5.draw = () => {
    let bgColor = p5.color('#f5f5f5');
    p5.background(bgColor);
    handleInteractions();
    /* for (let j = 0; j < num; j++) {
      particles.push(new Particle(p5.mouseX, p5.mouseY, c));
    } */
    for (let i = 0; i < particles.length; i++) {
      particles[i].move();
      particles[i].display();
    }

    if (particles.length < MAX_PARTICLE_COUNT) {
      particles.push(new Particle(p5.width / 2 + p5.random(-500, 500), p5.height / 2 + p5.random(-500, 500), p5.color(p5.random(100, 300), 40, 100)))
    }
  }

  function Particle(x, y, c) {
    this.xPos = x;
    this.yPos = y;
    this.xVel = 0;
    this.yVel = 0;
    this.mass = p5.random(0.002, 0.05);
    this.velocity = p5.createVector(p5.random(-1, 10), p5.random(-1, -10));
    this.acceleration = p5.createVector(0, 0.0005);
    this.colour = c;

    // moves the particle
    this.move = function () {
      this.xPos += this.xVel;
      this.yPos += this.yVel;
    }

    // displays the particle
    this.display = function () {
      p5.fill(this.colour)
      p5.ellipse(this.xPos, this.yPos, this.mass * massMultiplier, this.mass * massMultiplier)
      //mass 150
    };
  }
  /* Particle.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }; */

  function handleInteractions(i, j) {
    for (var i = 0; i < particles.length; i++) {
      var accX = 0; var accY = 0;

      // particle interaction
      for (var j = 0; j < particles.length; j++) {
        if (i != j) {
          var x = particles[j].xPos - particles[i].xPos;
          var y = particles[j].yPos - particles[i].yPos;
          var dis = p5.sqrt(x * x + y * y);
          if (dis < 1) dis = 1;

          var force = (dis - circleValue) * particles[j].mass / dis / 5;
          //mobile 250
          accX += force * x;
          accY += force * y;
        }

        // mouse interaction
        var x = p5.mouseX - particles[i].xPos;
        var y = p5.mouseY - particles[i].yPos;
        var dis = p5.sqrt(x * x + y * y);

        // adds a dampening effect
        if (dis < 40) dis = 40;
        if (dis > 50) dis = 50;

        var force = (dis - 50) / (5 * dis);
        accX += force * x;
        accY += force * y;
      }
      particles[i].xVel = particles[i].xVel * viscosity + accX * particles[i].mass;
      particles[i].yVel = particles[i].yVel * viscosity + accY * particles[i].mass;
    }
  }
}