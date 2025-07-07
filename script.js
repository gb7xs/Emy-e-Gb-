function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('heart');
  coracao.innerText = '❤️';
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.fontSize = (20 + Math.random() * 20) + 'px';
  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 10000);
}

setInterval(criarCoracao, 500);
