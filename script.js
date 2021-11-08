"use strict"

var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");
var x=80, y = 50, larg = 50, alt = 35, largMenor = 15, altMenor = 25, farol = 5, angulo = 0;

var teclas = [];

function desenhar() {
    ctx.clearRect(0,0, canvas.clientWidth, canvas.height);
    ctx.fillStyle = "black";
    
    processarTeclas();
    verificarLimites()
    ctx.save();

    ctx.translate(x,y);
    ctx.rotate(angulo);

    ctx.fillStyle  ='#256EF3';
    ctx.fillRect(-larg/2, -alt/2, larg, alt);
   
    ctx.fillStyle ='#E5231C';
    ctx.fillRect((-larg/2)+45, -(alt/2)+5, farol, farol);
    ctx.fillRect((-larg/2)+45, -(alt/2)+25, farol, farol);

    ctx.fillStyle ='#37A6DD';
    ctx.fillRect((-larg/2)+25, -(alt/2)+5, largMenor, altMenor);

    ctx.restore()
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
        x += 5 * Math.cos(angulo);
        y += 5 * Math.sin(angulo);  //up
    }

    if (teclas[40]) {
        x -= 5 * Math.cos(angulo);
        y -= 5 * Math.sin(angulo);  //down
    }
}

function verificarLimites() {
    if (x < canvas.width) {
        x = 0;
    }
    if (y < canvas.height) {
        y = 0;
    }
}

document.onkeydown = function (evt) {
    teclas[evt.keyCode] = true;
}

document.onkeyup = function (evt) {
    teclas[evt.keyCode] = false;
}


