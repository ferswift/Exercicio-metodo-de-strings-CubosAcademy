Formatar número de celular
Faça um sistema que receba um número de celular, formate corretamente e adicione o 9 quando não existir seguindo os padrões a seguir:

Entrada
A entrada do seu programa será composta por uma variável do tipo number:

telefone: número a ser formatado pelo seu programa;
Saída
Você deve retornar:

"7199918888": Quando passado o número deve ser retornado já formatado (71) 9 9991-8888;

<li><code>"999"</code>: Quando passado o número deve ser retornado uma mensagem -> invalido (Sem acento)</li>
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
