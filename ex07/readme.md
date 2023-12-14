Esconder número do cartão de crédito
Faça um sistema que seja capaz de formatar uma string com os 16 números de um cartão de crédito, de maneira que seja exibido apenas os 4 primeiros e os 4 últimos dígitos, substituindo os caracteres ocultos por \*.

Entrada
A entrada do seu programa será composta por uma variável em formato string:

cartao: valor que vai ser formatado pelo seu programa;
Saída
Você deve retornar:

"11111" ou 11112222333355555555: Quando passado a string deve ser retornado uma mensagem -> invalido (Sem acento)
const numeroCartao = '1111222233334444';

Para o exemplo acima o sistema deverá imprimir:

1111 **\*\*\*\*** 4444
const numeroCartao = '11112222333355555555';

Para o exemplo acima o sistema deverá imprimir:

invalido
const numeroCartao = '11111';

Para o exemplo acima o sistema deverá imprimir:

invalido
