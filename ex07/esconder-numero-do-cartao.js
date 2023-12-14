/*
const numeroCartao = '1111 2222 3333 5555 5555';
Para o exemplo acima o sistema deverá imprimir:
invalido

const numeroCartao = '11111';
Para o exemplo acima o sistema deverá imprimir:
invalido
*/

/* 
de maneira que seja exibido apenas os 4 primeiros e os 4 últimos dígitos, substituindo os caracteres ocultos por *
Saída esperada: 1111 **** **** 4444
*/

const numeroCartao = "1111222233334444"; // tamanho === 16

function ocultarNumeros(cartao) {
  if (cartao.length === 16) {
    return `${cartao.slice(0, 4)} ${cartao.slice(-4).padStart(14, "**** ")}`;
  } else {
    return "Cartão Inválido";
  }
}

console.log(ocultarNumeros(numeroCartao));
