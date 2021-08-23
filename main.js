var mouseEvent= "empty";
console.log(mouseEvent);
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color= "red";
width_of_line= 2;
radius= 40;
document.getElementById("color_input").value=color;
document.getElementById("width_input").value=width_of_line;
document.getElementById("radius_input").value=radius;
var last_position_X, last_position_Y;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
      
    color=document.getElementById("color_input").value;
    width_of_line=document.getElementById("width_input").value;
    radius= document.getElementById("radius_input").value;
    console.log(radius,color,width_of_line);
    mouseEvent= "mousedown"
    console.log(mouseEvent);
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){

    mouseEvent= "mouseup"
    console.log(mouseEvent);
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){

    mouseEvent= "mouseleave"
    console.log(mouseEvent);
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){

    current_position_X= e.clientX - canvas.offsetLeft;
    current_position_Y= e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown" ){
        console.log("mousedown + mousemove")
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width_of_line;
        ctx.arc(current_position_X, current_position_Y, radius, 0, 2*Math.PI)
        console.log("last position coordinates are- " + last_position_X+ "," + last_position_Y);
        
        console.log("current position coordinates are- " + current_position_X+ "," + current_position_Y);
        ctx.stroke();
   
    }
last_position_X= current_position_X;
last_position_Y= current_position_Y;
}
 function clearArea(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
 }
