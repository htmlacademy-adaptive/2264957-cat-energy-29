const container = document.querySelector('.slider');
document.querySelector('.slider__input').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%` );
})
