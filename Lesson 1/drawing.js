var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
// Start Point
ctx.moveTo(0,0);
// End Point
ctx.lineTo(200,100);
// Draw
ctx.stroke();
ctx.moveTo(20,20);
ctx.lineTo(200,100);
ctx.stroke();
// Color of Rectabgle
ctx.fillStyle="rgb(0,100,100)";
// Rectangle
ctx.fillRect(200,200,80,80)
// border
ctx.strokeRect(100,100,120,120);
ctx.clearRect(220,220,40,40);
// Chess Board
var c1 = document.getElementById("myCanvas1");
var ctx1 = c1.getContext("2d");
ctx1.fillRect(0,0,150,150);
ctx1.fillRect(150,150,150,150);

// Challenge 4
var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");
var x = 0;
var y = 0;
var width  = 300;
var height = 300;
ctx2.fillRect(x,y,width,height);
while(width>0){
	x+=10;
	y+=10;
	width -= 20;
	height -= 20;
	ctx2.clearRect(x,y,width,height);
	x+=10;
	y+=10;
	width-=20;
	height-=20;
	ctx2.fillRect(x,y,width,height);
}
