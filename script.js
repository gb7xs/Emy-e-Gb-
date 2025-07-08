function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('heart');
  coracao.innerText = '❤️';
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.fontSize = (20 + Math.random() * 20) + 'px';
  
  const wrapper = document.querySelector('.hearts-wrapper');
  wrapper.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 10000);
}

setInterval(criarCoracao, 400);

let slideIndex = 0;

function mudarSlide(direction) {
  const slider = document.getElementById('slider');
  const totalSlides = slider.children.length;
  slideIndex += direction;

  if (slideIndex < 0) slideIndex = totalSlides - 1;
  if (slideIndex >= totalSlides) slideIndex = 0;

  const offset = slideIndex * slider.clientWidth;
  slider.style.transform = `translateX(-${offset}px)`;
}
