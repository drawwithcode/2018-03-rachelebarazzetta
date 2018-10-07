function preload(){
  // put preload code here

}
var myColor = ['#586994', '#F43022', '#C5EFCB', '#F6F7EB', '#85CAD9']
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(115);
}

function draw() {

  // put drawing code here
  for(var x = -30; x < width ; x+=50){
    for(var y = -30; y < height; y+=50){
      var r = random();
      if(0 < r < 0.2){
        fill('#586994');
      }else if(0.2 < r < 0.4){
        fill('#F43022');
      }else if(0.4 < r < 0.6){
        fill('#C5EFCB');
      }else if(0.6 < r < 0.8){
        fill('#F6F7EB');
      }else if(0.8 < r < 1){
        fill('#85CAD9');
      }
      quad(x, y, x+70, y,  x+100, y+70,  x+30, y+70);
    }
  }

}
