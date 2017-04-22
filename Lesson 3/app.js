var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = "2px";

//starting coordinate
ctx.moveTo(75,0);
//other points
ctx.lineTo(150,100);
ctx.lineTo(75,200);
ctx.lineTo(0,100);
ctx.closePath();
ctx.stroke();

//fill in
ctx.fillStyle = "red";
ctx.fill();

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext('2d');

ctx2.beginPath();
ctx2.strokeStyle = "black";
ctx2.lineWidth = "2px";

//starting coordinate
ctx2.moveTo(0,0);
//other points
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.closePath();
ctx2.stroke();

//fill in
ctx2.fillStyle = "blue";
ctx2.fill();

var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext('2d');

ctx3.beginPath();
ctx3.arc(100,100,50,0,6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "green"
ctx3.fill();

ctx3.beginPath();
ctx3.arc(200,200,50,0,6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "red"
ctx3.fill();

var c4 = document.getElementById("myCanvas4");
var ctx4 = c4.getContext('2d');

ctx4.beginPath();
ctx4.moveTo(0,300);
ctx4.lineTo(500,300);
ctx4.lineTo(500,500);
ctx4.lineTo(0,500);
ctx4.lineTo(0,300);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "green"
ctx4.fill();

ctx4.beginPath();
ctx.moveTo(0,300);
ctx4.lineTo(0,0);
ctx4.lineTo(500,0);
ctx4.lineTo(500,300);
ctx4.lineTo(0,300);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "cyan"
ctx4.fill();

ctx4.beginPath();
ctx4.arc(50,50,50,0,6.28);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "yellow"
ctx4.fill();

ctx4.beginPath();
ctx4.moveTo(50,300);
ctx4.lineTo(150,300);
ctx4.lineTo(150,200);
ctx4.lineTo(50,200);
ctx4.lineTo(50,300);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "red"
ctx4.fill();


























