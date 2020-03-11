const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 700;   //<<pixel modifier 을 줘야함 그래야지 화면에 원하는 위치에 제대로 그려짐

ctx.strokeStyle="#2c2c2c";
ctx.lineWidth=2.5;


let painting = false;

function stopPainting(){
    painting=false;
}

function startPainting(){
    painting = true;
}


function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();  //path 는 선
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}


function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle= color;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
}

Array.from(colors).forEach(color=>color.addEventListener("click",handleColorClick))