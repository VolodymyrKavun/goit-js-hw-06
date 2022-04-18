function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  colorBtn: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
  bodyEl: document.querySelector('body'),
};

refs.colorBtn.addEventListener('click', function () {
  const color = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = color;
  refs.spanColor.textContent = color;
});
