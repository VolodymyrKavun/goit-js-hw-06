const refs = {
  valueEl: Number(document.querySelector('#value').textContent),
  counterValue: document.querySelector('#value'),
  decrementBtn: document.querySelector('[data-action=decrement]'),
  incrementBtn: document.querySelector('[data-action=increment]'),
};

refs.incrementBtn.addEventListener('click', () => {
  refs.valueEl += 1;
  refs.counterValue.innerHTML = refs.valueEl;
});

refs.decrementBtn.addEventListener('click', () => {
  refs.valueEl -= 1;
  refs.counterValue.innerHTML = refs.valueEl;
});
