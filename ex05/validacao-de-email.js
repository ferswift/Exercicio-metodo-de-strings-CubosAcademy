/*
Sempre tem que ter @
Sempre tem que ter pelo menos um .
Nunca pode começar com .
Nunca pode terminar com .
*/

const emailDaCubos = "jose@cubos";

function validarEmail(email) {
  if (!email.includes("@")) {
    return "Email Invalido";
  } else if (!email.includes(".")) {
    return "Email Invalido";
  } else if (email.indexOf("@") === 0 || email.indexOf(".") === 0) {
    return "Email Invalido";
  } else if (email.lastIndexOf(".") === email.length - 1) {
    return "Email Invalido";
  } else {
    return "Email Válido";
  }
}
const emailFormatado = validarEmail(emailDaCubos);

console.log(emailFormatado);
