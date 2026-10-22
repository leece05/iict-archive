// 처음에는 모든 창문의 불이 켜져 있음
let light1 = 1;
let light2 = 1;
let light3 = 1;
let light4 = 1;
let light5 = 1;
let light6 = 1;
let light7 = 1;
let light8 = 1;
let light9 = 1;
let light11 = 1;
let light12 = 1;
let light13 = 1;
let light14 = 1;
let light15 = 1;
let light16 = 1;
let light17 = 1;
let light18 = 1;
let light19 = 1;

// 마지막까지 켜져 있을 창문
let lastLight = 1;

// 처음에는 밤하늘 색
let skyR = 15;
let skyG = 20;
let skyB = 50;

// 밤에는 night가 1, 아침에는 morning이 1
let night = 1;
let morning = 0;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  // 별의 위치와 크기를 랜덤으로 설정
  let starX1 = random(10, 390);
  let starY1 = random(60, 170);
  let starSize1 = random(2, 7);

  let starX2 = random(10, 390);
  let starY2 = random(60, 170);
  let starSize2 = random(2, 7);

  let starX3 = random(10, 390);
  let starY3 = random(60, 170);
  let starSize3 = random(2, 7);

  let starX4 = random(10, 390);
  let starY4 = random(60, 170);
  let starSize4 = random(2, 7);

  let starX5 = random(10, 390);
  let starY5 = random(60, 170);
  let starSize5 = random(2, 7);

  let starX6 = random(10, 390);
  let starY6 = random(60, 170);
  let starSize6 = random(2, 7);

  let starX7 = random(10, 390);
  let starY7 = random(60, 170);
  let starSize7 = random(2, 7);

  let starX8 = random(10, 390);
  let starY8 = random(60, 170);
  let starSize8 = random(2, 7);

  // 하늘
  background(skyR, skyG, skyB);
  noStroke();

  // 달: night가 0이 되면 크기도 0이 되어 사라짐
  fill(255, 245, 190);
  ellipse(350, 55, 45 * night, 45 * night);

  // 해: morning이 1이 되면 나타남
  fill(255, 210, 80);
  ellipse(350, 55, 50 * morning, 50 * morning);

  // 별
  fill(255);

  ellipse(starX1, starY1, starSize1 * night, starSize1 * night);

  ellipse(starX2, starY2, starSize2 * night, starSize2 * night);

  ellipse(starX3, starY3, starSize3 * night, starSize3 * night);

  ellipse(starX4, starY4, starSize4 * night, starSize4 * night);

  ellipse(starX5, starY5, starSize5 * night, starSize5 * night);

  ellipse(starX6, starY6, starSize6 * night, starSize6 * night);

  ellipse(starX7, starY7, starSize7 * night, starSize7 * night);

  ellipse(starX8, starY8, starSize8 * night, starSize8 * night);

  // 땅
  fill(10, 12, 25);
  rect(0, 370, 400, 30);

  // 건물 세 개
  fill(55, 60, 80);
  rect(20, 180, 100, 190);

  fill(70, 70, 90);
  rect(145, 110, 110, 260);

  fill(45, 50, 70);
  rect(280, 160, 95, 210);

  // 첫 번째 건물의 창문
  fill(255 * light1, 215 * light1, 90 * light1);
  rect(40, 215, 18, 25);
  fill(255 * light11, 215 * light11, 90 * light11);
  rect(75, 215, 18, 25);

  fill(255 * light2, 215 * light2, 90 * light2);
  rect(40, 270, 18, 25);
  fill(255 * light12, 215 * light12, 90 * light12);
  rect(75, 270, 18, 25);

  fill(255 * light3, 215 * light3, 90 * light3);
  rect(40, 325, 18, 25);
  fill(255 * light13, 215 * light13, 90 * light13);
  rect(75, 325, 18, 25);

  // 마지막까지 켜져 있을 하나의 창문
  fill(
    255 * lastLight,
    215 * lastLight,
    90 * lastLight
  );
  rect(190, 145, 20, 25);

  // 두 번째 건물의 창문
  fill(255 * light4, 215 * light4, 90 * light4);
  rect(165, 200, 20, 25);
  fill(255 * light14, 215 * light14, 90 * light14);
  rect(215, 200, 20, 25);

  fill(255 * light5, 215 * light5, 90 * light5);
  rect(165, 255, 20, 25);
  fill(255 * light15, 215 * light15, 90 * light15);
  rect(215, 255, 20, 25);

  fill(255 * light6, 215 * light6, 90 * light6);
  rect(165, 310, 20, 25);
  fill(255 * light16, 215 * light16, 90 * light16);
  rect(215, 310, 20, 25);

  // 세 번째 건물의 창문
  fill(255 * light7, 215 * light7, 90 * light7);
  rect(297, 200, 18, 25);
  fill(255 * light17, 215 * light17, 90 * light17);
  rect(337, 200, 18, 25);

  fill(255 * light8, 215 * light8, 90 * light8);
  rect(297, 255, 18, 25);
  fill(255 * light18, 215 * light18, 90 * light18);
  rect(337, 255, 18, 25);

  fill(255 * light9, 215 * light9, 90 * light9);
  rect(297, 310, 18, 25);
  fill(255 * light19, 215 * light19, 90 * light19);
  rect(337, 310, 18, 25);
 
  // 사용 방법
  fill(190);
  textSize(10);
  text(
    "마우스 클릭: 시간의 흐름  |  키보드: 아침",
    15,
    390
  );
}

// 클릭할 때마다 창문의 불이 랜덤하게 꺼짐
function mousePressed() {
  light1 = light1 * int(random(0.8, 2));
  light2 = light2 * int(random(0.8, 2));
  light3 = light3 * int(random(0.8, 2));
  light4 = light4 * int(random(0.8, 2));
  light5 = light5 * int(random(0.8, 2));
  light6 = light6 * int(random(0.8, 2));
  light7 = light7 * int(random(0.8, 2));
  light8 = light8 * int(random(0.8, 2));
  light9 = light9 * int(random(0.8, 2));
  light11 = light11 * int(random(0.8, 2));
  light12 = light12 * int(random(0.8, 2));
  light13 = light13 * int(random(0.8, 2));
  light14 = light14 * int(random(0.8, 2));
  light15 = light15 * int(random(0.8, 2));
  light16 = light16 * int(random(0.8, 2));
  light17 = light17 * int(random(0.8, 2));
  light18 = light18 * int(random(0.8, 2));
  light19 = light19 * int(random(0.8, 2));

  redraw();
}

// 마지막 창문만 남았을 때 키보드를 누름
function keyPressed() {
  light1 = 0;
  light2 = 0;
  light3 = 0;
  light4 = 0;
  light5 = 0;
  light6 = 0;
  light7 = 0;
  light8 = 0;
  light9 = 0;
  light11 = 0;
  light12 = 0;
  light13 = 0;
  light14 = 0;
  light15 = 0;
  light16 = 0;
  light17 = 0;
  light18 = 0;
  light19 = 0;
  lastLight = 0;

  // 아침 하늘로 변경
  skyR = 190;
  skyG = 215;
  skyB = 235;

  // 달과 별은 사라지고 해가 나타남
  night = 0;
  morning = 1;

  redraw();
}