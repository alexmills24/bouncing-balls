//grabs the canvas from HTML
let canvas = document.querySelector('canvas');
//Allows the balls to be put on the canvas
let canvasArea = canvas.getContext('2d');
//sets the height and width using the window sizing. 
let width = canvas.width = innerWidth;
let height = canvas.height = innerHeight;

//function to be called in the class to create the balls
const random = (max, min) => {
  let num = Math.floor(Math.random() * (max - min)) + min;
  return num;
};


class Ball {
  constructor() {
    //x and y stop the balls from going off the page before they change direction
    this.x = random(0, width);
    this.y = random(0, height);
    //speedX & speedY tells the balls the speed at which to travel
    this.speedX = random(-7, 7);
    this.speedY = random(-7, 7);
    //give the balls a random colour
    this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
    //gives the balls a random size
    this.size = random(10, 20);
  };

  //the draw method draws the balls onto the canvas.
  draw() {
    canvasArea.beginPath();
    canvasArea.fillStyle = this.color;
    canvasArea.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    canvasArea.fill();
  };

  //update changes the direction of the balls when they reach the edges of the page.
  update() {
    if ((this.x + this.size) >= width) {
      this.speedX = -(this.speedX);
    }
    if ((this.x - this.size) <= 0) {
      this.speedX = -(this.speedX);
    }
    if ((this.y + this.size) >= height) {
      this.speedY = -(this.speedY);
    }
    if ((this.y - this.size) <= 0) {
      this.speedY = -(this.speedY);
    }
    this.x += this.speedX;
    this.y += this.speedY;
  };
};
//sets an empty to array that is filled in the loop function
let balls = [];


//creates 25 balls and then places them in the array
loop = () => {
  canvasArea.fillStyle = 'rgba(0, 0, 0, 0.25)';
  canvasArea.fillRect(0, 0, width, height);
  while (balls.length < 1) {
    let ball = new Ball();
    balls.push(ball)
  };

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
  };
  //makes the balls move on the page. Calls loop as a parameter
  requestAnimationFrame(loop)

};
loop();

//adds new balls to the screen
addEventListener("keydown", event => {
  if (event.keyCode === 32) {
    let ball = new Ball
    return balls.push(ball);

  };
});