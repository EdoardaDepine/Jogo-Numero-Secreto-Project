function verificaChutePossuiValorValido(chute) {
  const numero = parseInt(chute);

  if (Number.isNaN(numero)) {
    elementoChute.innerHTML += "<div>Valor inválido!</div>";
  }

  if (numero < menorValor || numero > maiorValor) {
    elementoChute.innerHTML +=
      "<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>";
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}!
    `;
  }
}
