// Saída aprenda-programar-do-zero-na-cubos-academy

const texto = "Aprenda programar do zero na Cubos Academy";

function formatarUrl(url) {
  const converterParaMinusculo = url.toLowerCase();

  return converterParaMinusculo.replaceAll(" ", "-");
}

console.log(formatarUrl(texto));
