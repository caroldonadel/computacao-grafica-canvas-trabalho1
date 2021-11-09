"use strict"

var canvas = document.getElementById("tela");
var contexto = canvas.getContext("2d");
var x=80, y = 50, largura = 50, altura = 35, largMenor = 15, altMenor = 25, farol = 5, angulo = 0, velocidade = 5;

var teclas = [];

function desenhar() {
    contexto.clearRect(0,0, canvas.clientWidth, canvas.height);
    contexto.fillStyle = "black";
    
    processarTeclas();
    verificarLimites()
    contexto.save();

    contexto.translate(x,y);
    contexto.rotate(angulo);

    contexto.fillStyle  ='#256EF3';
    contexto.fillRect(-largura/2, -altura/2, largura, altura);
   
    contexto.fillStyle ='#E5231C';
    contexto.fillRect((-largura/2)+45, -(altura/2)+5, farol, farol);
    contexto.fillRect((-largura/2)+45, -(altura/2)+25, farol, farol);

    contexto.fillStyle ='#37A6DD';
    contexto.fillRect((-largura/2)+25, -(altura/2)+5, largMenor, altMenor);

    contexto.restore()
    requestAnimationFrame(desenhar); 
}

desenhar();

function processarTeclas() {
    
    if (teclas[39]) {
        angulo += Math.PI / 90;  //direita
    }

    if (teclas[37]) {
        angulo -= Math.PI / 90;  //esquerda
    }

    if (teclas[38]) {
        console.log(velocidade)
        x += velocidade * Math.cos(angulo);
        y += velocidade * Math.sin(angulo);  //up
    }

    if (teclas[40]) {
        x -= velocidade * Math.cos(angulo);
        y -= velocidade * Math.sin(angulo);  //down
    }
}

function verificarLimites() {
    if (x > canvas.width) {
        x =40;
        velocidade = 0;
    }

    if (y > canvas.height) {
        
        y = 55;
        velocidade = 0;
    }

    if (y < 0 || x < 0) {
        
        y = 55;
        x =40;
        velocidade = 0;
    }
}

document.onkeydown = function (evt) {
    teclas[evt.keyCode] = true;
    console.log(evt.keyCode)

        if (evt.keyCode == 32) { //enter
        velocidade ++;
    }

    if (evt.keyCode == 16) { //shift
        velocidade --;
    }
}

document.onkeyup = function (evt) {
    teclas[evt.keyCode] = false;
}


