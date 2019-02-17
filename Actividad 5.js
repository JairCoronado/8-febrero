var x = 200;
var vel = 10;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	ellipse(x,200,50,50);
	x = x+vel;
	if(x>375){ 
	vel = vel*-1;
	}
	if(x<25){
	vel = vel*-1;
	}
	console.log(x);
}