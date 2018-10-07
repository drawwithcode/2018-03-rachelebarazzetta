function preload(){
}


var myColor = ['#586994', '#F43022', '#C5EFCB', '#F6F7EB', '#85CAD9'];
var myColor1 = ['#25CED1', '#FF8A5B', '#F9FEF8', '#BFEB9F', '#AAD285'];
var myColor2 = ['#5EDCFF', '#FF8989', '#F79F79', '#4FEFAC', '#A075FF'];
var r = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  background('black');
  fill(255, 255, 255);
  text('click on the screen', windowWidth/2-50, windowHeight/2);
  stroke('white');

}

function polygon(x, y, radius, npoints) {
	var angle = TWO_PI / npoints;
	beginShape();
	for (var a = 0; a < TWO_PI; a += angle) {
	var sx = x + cos(a) * radius;
	var sy = y + sin(a) * radius;
	vertex(sx, sy);
	}
	endShape(CLOSE);
	}

function mousePressed(){

  var k = random(2);
  k = Math.round(k);
  console.log(k);

  for(var x = -35; x < width ; x+=70){
    for(var y = -35; y < height; y+=70){
      var r = random();
      if(k==0){
        var c = random(0, myColor.length-1);
          c = Math.round(c);
          fill(myColor[c]);
          polygon(x+100,y+100,115,12);
        }else if(k==1){
        var c = random(0, myColor1.length-1);
          c = Math.round(c);
          fill(myColor1[c]);
          quad(x, y, x+70, y,  x+105, y+70, x +30, y+70);
        }else if(k==2){
        var c = random(0, myColor2.length-1);
          c = Math.round(c);
          fill(myColor2[c]);
          polygon(x+30,y+30,120,6);
        }

}
}
}

function draw() {

}
