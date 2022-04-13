function pedirNumeroUsuario(){ 
    var numero = Number(prompt("INFORME UM NUMERO"));
    return numero;

}

function mostrarResultado(valor){
    document.write("O RESULTADO É " + valor);

}

function calcularAreaQuadrado(){
    var lado = pedirNumeroUsuario(){
        var resultado = matchMedia.pow(lado, 2);
        mostrarResultado(resultado);
    }
}

calcularAreaQuadrado();