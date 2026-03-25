let circles = [];

class Circle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.vx = random(-5, 5);
    this.vy = random(-5, 5);
  }


move() {

    this.x += this.vx;
    this.y += this.vy;
    if (this.x < this.size / 2 || this.x> width - this.size / 2) this.vx *= -1;
    if (this.y < this.size / 2 || this.y> height - this.size / 2) this.vy *= -1;

}

display() {
    circle(this.x, this.y, this.size);
  }
}

function setup() {

    createCanvas(800, 500);
    for (let i = 0; i < 3; i++) {

        circles.push(new Circle(

            random(width),
            random(height),
            random(10, 50)

        ));
    
    }
}

function draw() {

    background(220);
    for (let c of circles ) {

        c.move();
        c.display();

    }

}