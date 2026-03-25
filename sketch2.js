let shapes = [];

class Shape {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.vx = 0;
        this.vy = 0;

    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < this.size / 2 || this.x > width - this.size / 2) this.vx *= -1;
        if (this.y < this.size / 2 || this.y > height - this.size / 2) this.vy *= -1;
    }

    display() {
        //empty
    }
}

class Circle extends Shape {
    constructor (x, y, size) {
        super(x, y, size);
        this.vx = random(1, 5);
    }

    display(){
        fill(127, 119, 221);
        circle(this.x, this.y, this.size);
    }
}

class Square extends Shape {
    constructor(x, y, size) {
        super(x, y, size);
        this.vx = random(1, 5)
        this.vy = random(1, 5)
    }

    display(){
        fill(220, 50, 50);
        rectMode(CENTER);
        rect(this.x, this.y, this.size, this.size);
    }
}

class Triangle extends Shape {
  constructor(x, y, size) {
    super(x, y, size);
    this.vy = random(1, 5); 
  }

  display() {
    fill(255, 105, 180);
    triangle(
      this.x, this.y - this.size / 2,
      this.x - this.size / 2, this.y + this.size / 2,
      this.x + this.size / 2, this.y + this.size / 2
    );
  }
}

function setup(){

    createCanvas(800, 500);

    for (let i = 0; i < 2; i++) {
        let size = random (10, 50);
        shapes.push(new Circle(
            random(size / 2, width - size / 2),
            random(size / 2, height - size / 2),
            size

        ));
    }
    for (let i = 0; i < 2; i++) {
    let size = random(10, 50);
    shapes.push(new Square(
      random(size / 2, width  - size / 2),
      random(size / 2, height - size / 2),
      size
    ));
  }

  for (let i = 0; i < 2; i++) {
    let size = random(10, 50);
    shapes.push(new Triangle(
      random(size / 2, width  - size / 2),
      random(size / 2, height - size / 2),
      size
    ));
  }
}

function draw() {
  background(220);
  for (let s of shapes) {
    s.move();
    s.display();
  }
}