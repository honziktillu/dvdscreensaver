const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let image = new Image();
image.src = "./res/img/logo.png";
let x = 0;
let y = 0;
let xVelocity = 2;
let yVelocity = 2;
let imageWidth = 100;
let imageHeight = 50;

window.addEventListener("resize", () => {
  resizeCanvas();
});

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.onload = () => {
  resizeCanvas();
  setInterval(() => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    x += xVelocity;
    y += yVelocity;
    if (y + imageHeight >= canvas.height || y <= 0) {
      yVelocity *= -1;
    }
    if (x + imageWidth >= canvas.width || x <= 0) {
      xVelocity *= -1;
    }
    ctx.filter = `hue-rotate(${getRandomNumber(0, 360)}deg)`; 
    ctx.drawImage(image, x, y, imageWidth, imageHeight);
    ctx.filter = "none"; 
  }, 1);
};

const getRandomNumber = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;