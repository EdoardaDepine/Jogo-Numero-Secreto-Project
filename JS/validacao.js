function verificaChutePossuiValorValido(chute) {
  const numero = parseInt(chute);

  if (Number.isNaN(numero)) {
    console.log("valor inválido");
  }

  if (numero < menorValor || numero > maiorValor) {
    console.log(
      `Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`
    );
  }
}
