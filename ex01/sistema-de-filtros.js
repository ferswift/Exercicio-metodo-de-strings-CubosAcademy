const comentario = "COVID é muito perigoso!";

const comentarioFormatado = comentario.toLowerCase();

if (comentarioFormatado.includes("covid")) {
  console.log("Comentário bloqueado");
} else {
  console.log("Comentário permtiido");
}
