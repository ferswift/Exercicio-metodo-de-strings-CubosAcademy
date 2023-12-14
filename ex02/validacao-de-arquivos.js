const index = "Foto da Familia.pdf";

const arquivoFiltrado = index.slice(-4);

if (arquivoFiltrado.includes(".pdf") || arquivoFiltrado.includes(".exe")) {
  console.log(`ARQUIVO INVÁLIDO tipo usado: ${arquivoFiltrado}`);
} else {
  console.log("ARQUIVO VÁLIDO");
}
