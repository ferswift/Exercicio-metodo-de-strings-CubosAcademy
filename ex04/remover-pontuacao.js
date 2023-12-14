const index = "16.068.948/0001-19";

function alterarCpfCnpj(documento) {
  let documentoAlterado = documento;
  documentoAlterado = documentoAlterado.replaceAll(".", "");
  documentoAlterado = documentoAlterado.replaceAll("/", "");
  documentoAlterado = documentoAlterado.replaceAll("-", "");

  return documentoAlterado;
}

const documentoAlterado = alterarCpfCnpj(index);
console.log(documentoAlterado);
