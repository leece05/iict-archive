function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220,210,240);//배경
  noStroke();
  fill(255, 255, 255, 150);
  circle(60, 80, 6);
  circle(340, 110, 8);
  circle(75, 310, 5);
  circle(330, 350, 6);
  fill(255, 210, 235, 180);
  circle(100, 180, 10);
  circle(310, 250, 8);

  fill(104,58,43);//머리카락
  stroke(104,58,43);
  strokeWeight(3);
  circle(200,145,30);
  circle(225,150,30);
  circle(245,170,30);
  circle(255,195,30);
  circle(260,220,30);
  circle(260,245,30);

  noStroke();//얼굴
  fill(255,232,208);
  circle(200,200,100);
  rect(150,200,100,50);

  fill(242,170,190);//입술
  rect(150,250,100,20);
  circle(150,260,20);
  circle(250,260,20);

  fill(255,232,208);//다리
  ellipse(180,320,30,50);
  ellipse(220,320,30,50);

  fill(242,185,211);//옷
  quad(150,270,250,270,270,310,130,310);
  circle(140,310,20);
  circle(160,310,20);
  circle(180,310,20);
  circle(200,310,20);
  circle(220,310,20);
  circle(240,310,20);
  circle(260,310,20);

  fill(255,232,208);//손
  ellipse(115, 285, 22, 18);  
  ellipse(285, 285, 22, 18); 

  fill(242,185,211);//옷소매
  ellipse(140,285,50,20);
  ellipse(260,285,50,20);

  circle(180,155,20);//헤어롤
  circle(210,155,20);
  fill(104,58,43);
  rect(180,145,30,20);

  stroke(225,145,170);//입술선
  line(150,260,250,260);

  fill(225,145,170);
  triangle(180,280,200,285,180,290);
  triangle(200,285,220,280,220,290);

  stroke(95, 49, 35);//눈썹
  strokeWeight(1);
  noFill();
  arc(205, 200, 13, 6, PI+HALF_PI, TWO_PI);


  strokeWeight(1);//눈
  line(180, 220, 190, 218);
  line(180, 223, 190, 221);
  line(200, 218, 210, 220);
  line(200, 221, 210, 223);
  noStroke();

  stroke(235, 150, 175);//볼터치
  strokeWeight(2);
  line(162, 236, 165, 231);
  line(170, 238, 173, 233);
  line(220,236,223,231);
  line(228,238,231,233);
  noStroke();

  noFill();//키링 줄
  stroke(255,255,0);
  strokeWeight(1);
  circle(180,145,10);
  circle(177,140,10);
  circle(173,135,10);
  circle(168,128,10);
  circle(165,120,10);
  strokeWeight(4);
  circle(150,100,50)
  


}