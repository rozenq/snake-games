const somFundo = new Audio("music/music.mp3");
const somGameOver = new Audio("music/gameover.mp3");
const somMover = new Audio("music/move.mp3");
const somComer = new Audio("music/food.mp3");


var direcao = { x: 0, y: 0 };
var cobrinha = [{ x: 5, y: 5 }]
var fruta = {
    x: Math.floor(Math.random() * 18),
    y: Math.floor(Math.random() * 18)
}

var pontos = 0;

var ultimaVezAtualizada = 0;
var velocidade = 5;

function principal(tempoAtual) {
    window.requestAnimationFrame(principal);
    if ((tempoAtual - ultimaVezAtualizada) / 1000 < (1 / velocidade)) {
        return;
    }
    ultimaVezAtualizada = tempoAtual;

    atualizaGame();
}

function verificaColisao() {
    for (var i = 1; i < cobrinha.length; i++) {
        if (cobrinha[i].x == cobrinha[0].x && cobrinha[i].y == cobrinha[0].y) {
            return true;
        }
    }
    //verifica colisao com paredes
    if (cobrinha[0].x >= 18 || cobrinha[0].x <= 0 || cobrinha[0].y >= 18 || cobrinha[0].y <= 0) {
        return true;
    }
    return false;

}

function verificaComeuFrutinha(){
    console.log("CHEGOU ATE AQUI")
    if(cobrinha[0].x == fruta.x && cobrinha[0].y == fruta.y){
        somComer.play();
        pontos = pontos + 10;
        pontuacao.innerHTML = pontos + " pontos";
        cobrinha.unshift({x: cobrinha[0].x + direcao.x, y: cobrinha[0].y + direcao.y})
        fruta = {
        fruta.x: Math.floor(Math.random() * 16) + 2,
        fruta.y: Math.floor(Math.random() * 16) + 2
        VELOCIDADE = VELOCIDADE + 0.5;
        }
    }
}

function atualizaGame() {
    var colidiu
    somFundo.play();
    var colidiu = verificaColisao();
    if (colidiu) {
        alert("GAME OVER")
        cobrinha = [{ x: 5, y: 5 }]
        direcao.x = 0;
        direcao.y = 0;
        pontuacao.innerHTML = pontos + " pontos"
        pontos = 0
    }
    verificaComeuFrutinha()
    for (var i = cobrinha.length - 2; i >= 0; i--) {
        console.log('fghfgvgh')
        cobrinha[i + 1] = { ...cobrinha[i] }
    }
    cobrinha[0].y += direcao.y;
    cobrinha[0].x += direcao.x;



    board.innerHTML = "";
    for (var i = 0; i < cobrinha.length; i++) {
        var parteCobrinha = document.createElement('div');
        parteCobrinha.style.gridRowStart = cobrinha[i].y;
        parteCobrinha.style.gridColumnStart = cobrinha[i].x;

        if (i == 0) {
            parteCobrinha.classList.add("head");
        } else {
            parteCobrinha.classList.add("snake");
        }

        board.appendChild(parteCobrinha);


    }

    var frutinha = document.createElement("div");
    frutinha.style.gridColumnStart = fruta.x;
    frutinha.style.gridRowStart = fruta.y;
    frutinha.classList.add("fruta");
    board.appendChild(frutinha);

}


window.addEventListener('keydown', function (e) {
    

    somMover.play();

    switch (e.code) {
        case "KeyW":
        case "ArrowUp":
            direcao.x = 0
            direcao.y = -1;
            //Subir
            break;
        case "KeyA":
        case "ArrowLeft":
            direcao.x = -1
            direcao.y = 0
            //Esquerda
            break;
        case "KeyS":
        case "ArrowDown":
            direcao.x = 0
            direcao.y = 1
            //Baixo
            break;
        case "KeyD":
        case "ArrowRight":
            direcao.x = 1
            direcao.y = 0
            //Direita
            break;
    }
})


principal()