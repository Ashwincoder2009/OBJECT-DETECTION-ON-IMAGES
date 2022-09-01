img="";
object=[];
status="";
function preload(){
img=loadImage("fruit-basket.jpg");
}
function setup(){
canvas=createCanvas(600,400);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Detecting Objects";
}
function modelLoaded(){
console.log("Model Loaded!");
status=true;
objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
if(error){
console.error(error);
}
else{
console.log(results);
object=results;
}
}
function draw(){
if(status!=""){
image(img,0,0,600,400);
for(var i=0;i<object.length;i++){
document.getElementById("status").innerHTML="status:-Object Detected";
fill("#FF0000");
stroke("#FF0000");
percentage=floor(object[i].confidence*100);
text(object[i].label+" "+percentage+"%",object[i].x+15,object[i].y+15);
noFill();
rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
}
}
function exit(){
window.location="index.html";
}