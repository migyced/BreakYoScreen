var TriAn = []; // array of objects
var circles = [];
var sqr = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  //background("pink");
  for (var i=0; i<1; i++) {//setup number of balls
    TriAn.push(new Tri());
  }
  for (var i=0; i<1; i++){
    circles.push(new Ball());
  }
  for (var i=0; i<1; i++){
    sqr.push(new Square());
  }
}
//
function draw() {
  background(random(0,255),random(0,255),random(0,255));
  for (var i=0; i<TriAn.length; i++) {
    TriAn[i].move();
    TriAn[i].display();
  }
  for (var i=0; i<circles.length; i++){
    circles[i].move();
    circles[i].display();
  }
  for (var i=0; i<sqr.length; i++){
    sqr[i].move();
    sqr[i].display();
  }
}
//
function Tri(mx,my) {
  this.loc = createVector(random(width),random(height));
  this.diameter = random(30, 60);
  this.speed = createVector(random(-6,6),random(-6,6));
  //this.acceleration = createVector(0,10);
//
  this.move = function() {
    this.loc.add(this.speed);
    this.speed.add(this.acceleration);
    this.speed.limit(100);
    if(this.loc.x > width || this.loc.x < 0){
      this.speed.x = this.speed.x*-1;
      TriAn.push(new Tri());
    }
    if(this.loc.y > height || this.loc.y < 0){
      this.speed.y = this.speed.y*-1;
      TriAn.push(new Tri());
    }
    }
//
  this.display = function() {
    fill(random(0,255),random(0,255),random(0,255));
    strokeWeight(random(1,10));
    stroke(random(0,255),random(0,255),random(0,255));
    triangle(this.loc.x, this.loc.y, this.loc.x+this.diameter,this.loc.y, this.loc.x+(this.diameter/2),this.loc.y-this.diameter);
  };
}
//
function Ball(mx,my) {
  this.loc = createVector(random(width),random(height));
  this.diameter = random(30, 60);
  this.speed = createVector(random(-6,6),random(-6,6));
  //this.acceleration = createVector(0,10);
//
  this.move = function() {
    this.loc.add(this.speed);
    this.speed.add(this.acceleration);
    this.speed.limit(100);
    if(this.loc.x > width || this.loc.x < 0){
      this.speed.x = this.speed.x*-1;
      circles.push(new Ball());
    }
    if(this.loc.y > height || this.loc.y < 0){
      this.speed.y = this.speed.y*-1;
      circles.push(new Ball());
    }
    }
//
  this.display = function() {
    fill(random(0,255),random(0,255),random(0,255));
    strokeWeight(random(1,10));
    stroke(random(0,255),random(0,255),random(0,255));
    ellipse(this.loc.x, this.loc.y, this.diameter, this.diameter);
  };
}
//
function Square(mx,my) {
  this.loc = createVector(random(width),random(height));
  this.diameter = random(30, 60);
  this.speed = createVector(random(-6,6),random(-6,6));
  //this.acceleration = createVector(0,10);
//
  this.move = function() {
    this.loc.add(this.speed);
    this.speed.add(this.acceleration);
    this.speed.limit(100);
    if(this.loc.x > width || this.loc.x < 0){
      this.speed.x = this.speed.x*-1;
      sqr.push(new Square());
    }
    if(this.loc.y > height || this.loc.y < 0){
      this.speed.y = this.speed.y*-1;
      sqr.push(new Square());
    }
    }
//
  this.display = function() {
    fill(random(0,255),random(0,255),random(0,255));
    strokeWeight(random(1,10));
    stroke(random(0,255),random(0,255),random(0,255));
    rect(this.loc.x, this.loc.y, this.diameter, this.diameter);
  };
}
