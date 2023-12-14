/*
O nickname deve conter, no máximo, 13 caracteres;
Deve começar sempre com "@";
Não deve existir espaços em branco;
São permitidos apenas caracteres minúsculos.

output 
@guidocerquei
*/

// 1-pegaria o tamanho do nome
// 2- eu estipularia o tamanho máximo apartir do tamanho
// 3- teria de usar algum metodo pra acessar a 1 string do nome
// 4- aplicar um trim() na variavel que guarda as outras 3 opcoes
// 5- converter para minusculo.

const nome = "Guido Cerqueira";

function gerarNickName(name) {
  let nickname = "@"; // nickname = @
  nickname = nickname + name; // @ + Guido Cerqueira
  nickname = nickname.toLowerCase(); // @guido cerqueira
  nickname = nickname.replace(" ", ""); // @guidocerqueira
  nickname = nickname.slice(0, 13); // @guidocerquei
  return nickname;
}

const nicknameGerado = gerarNickName(nome);

console.log(nicknameGerado);
