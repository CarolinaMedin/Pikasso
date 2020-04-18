var cajaCanvas = document.getElementById("paint2");
var context = cajaCanvas.getContext("2d");
context.lineWidth = 4;
context.strokeStyle = "rgb(240, 128, 128)";
var con = false;

function dibujar(trazo){
    x = trazo.clientX - cajaCanvas.offsetLeft;
    y = trazo.clientY - cajaCanvas.offsetTop;

    if(con == true){
        context.lineTo(x,y);
        context.stroke();
    }
}

cajaCanvas.addEventListener('mousemove', dibujar);

cajaCanvas.addEventListener('mousedown', function(){
    con = true;
    context.beginPath();
    context.moveTo(x,y);
    cajaCanvas.addEventListener('mousemove', dibujar);
});

cajaCanvas.addEventListener('mouseup', function(){
    con = false;
});

function color(valor){
    context.strokeStyle = valor.value;
}

function grosor(valor){
    context.lineWidth = valor.value;
}

function limpiar(){
    context.clearRect(0,0,800,500);
}