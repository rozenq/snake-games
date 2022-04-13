// var numero_usuareio = Number(prompt("ESCOLHA A POSIÇÃO DO NUMERO DESEJADO"));
// var posicoes = []
// for (var i = 1; 1<= numero_usuareio; i++){
//     var fibo = numero_anterior + numero_atual
// } 

var pai = [],
var mae = [],
var filho = [];

for (var i = 0; i < 10 ;i++){
    pai[i] = Math.floor(Math.random() * 100);
    mae[i] = Math.floor(Math.random() * 100);

    if (pai % 2 == 0) {
        filho[i] = pai[i];
    } else {
filho[i] = mae[i];
    }
}

document.write("PAI - "+ pai)
document.write("<br> MAE - " + mae)
document.write("<br> MAE" +mae)