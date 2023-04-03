function verificaChutePossuiValorValido(chute) {
  const numero = +chute;

  if (Number.isNaN(numero)) {
    document.body.innerHTML += `
    <h3 class="game-over">GAME OVER!</h3>
    <h2>Pressione o botão para jogar novamente:</h2>
    <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
    `;
    document.body.style.backgroundColor = "black";
    return;
  }

  if (numero < menorValor || numero > maiorValor) {
    elementoChute.innerHTML += `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}!</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente!</button>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`;
  } else {
    elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`;
  }
}

document.body.addEventListener("click", (evento) => {
  if (evento.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
