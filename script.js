let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 900;
minSpeed = -1;
maxSpeed = -8;
let enemiesYdy = Math.random() * (maxSpeed - minSpeed) + minSpeed;
let enemiesYdy2 = Math.random() * (maxSpeed - minSpeed) + minSpeed;
let enemiesYdy3 = Math.random() * (maxSpeed - minSpeed) + minSpeed;
let enemiesYdy4 = Math.random() * (maxSpeed - minSpeed) + minSpeed;
let carHeight = 70;
let carWidth = 70;
let carX = (canvas.width - carWidth) / 2;
let carY = canvas.height - carHeight;
let roadX = 0;
let roadY = -100;
let road2X = 0;
let road2Y = -100;
let roadDY = -2;
let road2DY = -2;
let rightPressed = false;
let leftPressed = false;
let enemiesWidth = 75;
let enemiesHeight = 75;
let enemiesX = Math.random() * (canvas.width - enemiesWidth + 20);
let enemiesY = canvas.height - 900;
let enemiesWidth2 = 75;
let enemiesHeight2 = 75;
let enemiesX2 = Math.random() * (canvas.width - enemiesWidth + 20);
let enemiesY2 =
  Math.random() * (canvas.height - 900 - (canvas.height - 850)) +
  (canvas.height - 850);
let enemiesWidth3 = 75;
let enemiesHeight3 = 75;
let enemiesX3 = Math.random() * (canvas.width - enemiesWidth + 20);
let enemiesY3 =
  Math.random() * (canvas.height - 900 - (canvas.height - 790)) +
  (canvas.height - 790);
let interval = 0;
let enemiesWidth4 = 75;
let enemiesHeight4 = 75;
let enemiesX4 = Math.random() * (canvas.width - enemiesWidth + 20);
let enemiesY4 =
  Math.random() * (canvas.height - 900 - (canvas.height - 710)) +
  (canvas.height - 710);

let btn = document.createElement("button");
let btnText = document.createTextNode("Start");
btn.appendChild(btnText);
let btnPlace = document.getElementById("myCanvas");
document.body.insertBefore(btn, btnPlace);

btn.addEventListener("click", function clickHandler() {
  function printNumbers(from, to) {
    let current = from;

    setTimeout(function go() {
      alert(current);
      if (current > to) {
        setTimeout(go, 1000);
      }
      current--;
      if (current === 0) {
        interval = setInterval(doing, 10);
      }
    }, 1000);
  }

  // использование:
  printNumbers(5, 1);

  btn.remove();
});

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode === 39) {
    rightPressed = true;
  } else if (e.keyCode === 37) {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.keyCode === 39) {
    rightPressed = false;
  } else if (e.keyCode === 37) {
    leftPressed = false;
  }
}

let road = new Image(); // Создаёт новый элемент изображения
function drawRoad() {
  ctx.drawImage(
    road,
    roadX,
    roadY,
    canvas.width + 120,
    canvas.height,
    -15,
    20,
    canvas.width,
    canvas.height + 1900
  );
}
road.src = "images/Road2.jpg"; // Устанавливает путь

let road2 = new Image(); // Создаёт новый элемент изображения
function drawRoad2() {
  ctx.drawImage(
    road2,
    road2X,
    road2Y,
    canvas.width + 120,
    canvas.height,
    -15,
    20,
    canvas.width,
    canvas.height + 1900
  );
}
road2.src = "images/Road2.jpg"; // Устанавливает путь

let img = new Image(); // Создаёт новый элемент изображения
function carDraw() {
  ctx.drawImage(img, carX, carY, carWidth, carHeight);
}
img.src = "images/car.png"; // Устанавливает путь

let imgEn = new Image(); // Создаёт новый элемент изображения
function enemiesDraw() {
  ctx.drawImage(imgEn, enemiesX, enemiesY, enemiesWidth, enemiesHeight);
}
imgEn.src = "images/carEnem.png"; // Устанавливает путь

let imgEn2 = new Image(); // Создаёт новый элемент изображения
function enemiesDraw2() {
  ctx.drawImage(imgEn2, enemiesX2, enemiesY2, enemiesWidth2, enemiesHeight2);
}
imgEn2.src = "images/carEnem.png"; // Устанавливает путь

let imgEn3 = new Image(); // Создаёт новый элемент изображения
function enemiesDraw3() {
  ctx.drawImage(imgEn3, enemiesX3, enemiesY3, enemiesWidth3, enemiesHeight3);
}
imgEn3.src = "images/carEnem.png"; // Устанавливает путь

let imgEn4 = new Image(); // Создаёт новый элемент изображения
function enemiesDraw4() {
  ctx.drawImage(imgEn4, enemiesX4, enemiesY4, enemiesWidth4, enemiesHeight4);
}
imgEn4.src = "images/carEnem.png"; // Устанавливает путь

function collapse() {
  if (enemiesY > 900) {
    enemiesY = y;
    enemiesX = Math.random() * (canvas.width - enemiesWidth + 20);
    enemiesYdy = Math.random() * (maxSpeed - minSpeed) + minSpeed;
  }
  if (enemiesY2 > 900) {
    enemiesY2 =
      Math.random() * (canvas.height - 900 - (canvas.height - 700)) +
      (canvas.height - 700);
    enemiesX2 = Math.random() * (canvas.width - enemiesWidth + 20);
    enemiesYdy2 = Math.random() * (maxSpeed - minSpeed) + minSpeed;
  }
  if (enemiesY3 > 900) {
    enemiesY3 =
      Math.random() * (canvas.height - 900 - (canvas.height - 700)) +
      (canvas.height - 700);
    enemiesX3 = Math.random() * (canvas.width - enemiesWidth + 20);
    enemiesYdy3 = Math.random() * (maxSpeed - minSpeed) + minSpeed;
  }
  if (enemiesY4 > 900) {
    enemiesY4 =
      Math.random() * (canvas.height - 900 - (canvas.height - 700)) +
      (canvas.height - 700);
    enemiesX4 = Math.random() * (canvas.width - enemiesWidth + 20);
    enemiesYdy4 = Math.random() * (maxSpeed - minSpeed) + minSpeed;
  }
  if (roadY > 500) {
    roadY = 0;
  } else if (
    (carX + carWidth - 30 > enemiesX &&
      carX < enemiesX + enemiesWidth - 30 &&
      carY > enemiesY &&
      carY < enemiesY + enemiesHeight - 30) ||
    (carX + carWidth - 30 > enemiesX2 &&
      carX < enemiesX2 + enemiesWidth2 - 30 &&
      carY > enemiesY2 &&
      carY < enemiesY2 + enemiesHeight2 - 30) ||
    (carX + carWidth - 30 > enemiesX3 &&
      carX < enemiesX3 + enemiesWidth3 - 30 &&
      carY > enemiesY3 &&
      carY < enemiesY3 + enemiesHeight3 - 30) ||
    (carX + carWidth - 30 > enemiesX3 &&
      carX < enemiesX3 + enemiesWidth3 - 30 &&
      carY > enemiesY3 &&
      carY < enemiesY3 + enemiesHeight3 - 30) ||
    (carX + carWidth - 30 > enemiesX4 &&
      carX < enemiesX4 + enemiesWidth4 - 30 &&
      carY > enemiesY4 &&
      carY < enemiesY4 + enemiesHeight4 - 30)
  ) {
    alert("GAME OVER");
    document.location.reload();
    clearInterval(interval);
  }
}

function doing() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRoad2();
  drawRoad();
  carDraw();
  enemiesDraw();
  enemiesDraw2();
  enemiesDraw3();
  enemiesDraw4();
  collapse();
  roadY -= roadDY;
  road2Y -= road2DY;
  enemiesY -= enemiesYdy;
  enemiesY2 -= enemiesYdy2;
  enemiesY3 -= enemiesYdy3;
  enemiesY4 -= enemiesYdy4;
  if (rightPressed && carX < canvas.width - carWidth) {
    carX += 6;
  } else if (leftPressed && carX > 0) {
    carX -= 6;
  }
}
