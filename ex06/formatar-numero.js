/*
"7199918888": Quando passado o número deve ser retornado já formatado (71) 9 9991-8888;

Caso exista o DDD:
const celular = 7199918888;

Será impresso:

(71) 9 9991-8888
Caso não exista o DDD:
const celular = 99918888;

Será impresso:

9 9991-8888
Caso for inválido:
const celular = 999;

Será impresso:
invalido

*/

const celular = String(7199918888);

function formatarCelular(numero) {
  if (numero.length === 10) {
    return `(${numero.slice(0, 2)}) 9 ${numero.slice(2, 6)}-${numero.slice(6)}`;
  } else if (numero.length === 8) {
    return `9 ${numero.slice(0, 4)}-${numero.slice(4)}`;
  } else {
    return "Número Invalido";
  }
}

console.log(formatarCelular(celular));
