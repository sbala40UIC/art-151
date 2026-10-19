let circles = [];
let webcam;
function setup() {
  createCanvas(800, 800);
  background(220);
  webcam = createCapture(VDEO);
  webcam.size(640,480);
  webcam.hide();
}

function draw() {
  
  // if (mouseButton.left) {
  //   circle(50, 50, 50);
  // }
  // if (mouseButton.right) {
  //   square(25,25,50);
  // }
  // if (mouseButton.center) {
  //   triangle(25,75,50,30,80,75);
  // }
  
  // line(0, mouseY, width, mouseY);
  
  // textAlign(CENTER);
  
  // textSize(16);
  
  // text(mouseIsPressed,25,60);
//   if (key === 'w') {
//     circle(40,40,30);
//   }
//   if (key === 'a') {
//     circle(80,80,30);
//   }
//   if (key === 's') {
//     circle(120,120,30);
//   }
//   if (key === 'd') {
//     circle(160,160,30);
//   }

//   if (keyCode === 40) {
//     fill(random(180), random(225), random(90));
//   }
  
//   if (keyIsDown(LEFT_ARROW) === true) {
//     fill('yellow');
//   }
  
//   if (keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW) === true) {
//     fill('blue');
//   }
  
  
  
  
  
  /// for (let circle of circles) {
  //   fill(circle.color);
  //   ellipse(circle.x, circle.y, 50);
  // }
  
  // if (mouseIsPressed) {
  //   let newCircle = {
  //     x:mouseX,
  //     y:mouseY,
  //     color:color(random(255), random(255), random(255))
  //   };
  //     circles.push(newCircle);
  // }
  
  
  
  
  //// fill("#D3F553");
  // ellipse(200,300,100,150);
  
  // push();
  // translate(200,200);
  // fill("#E200FF");
  // scale(2);
  // arc(0,0,100,100,PI,0,CHORD);
  // pop();
  
  // fill("#D3F553");
  // ellipse(200,200,80);
  
  
  
  
  image(webcam, 0, 0);
  filter(GRAY);
  filter(INVERT);
  filter(POSTERIZE, 4);
}
  
  
  



function mousePressed() {
  // fill('purple');
  // noStroke();
  // triangle(10,10,100,105,200,250);
  /// let newCircle = {
  //     x:mouseX,
  //     y:mouseY,
  //     color:color(random(255), random(255), random(255))
  // };
  // circles.push(newCircle);
  
}