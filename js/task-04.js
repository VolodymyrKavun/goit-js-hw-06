const refs = {
  counterValue: document.querySelector('#value'),
  decrementBtn: document.querySelector('[data-action=decrement]'),
  incrementBtn: document.querySelector('[data-action=increment]'),
};

let count = 0;

refs.incrementBtn.addEventListener('click', () => {
  count += 1;
  refs.counterValue.innerHTML = count;
});

refs.decrementBtn.addEventListener('click', () => {
  count -= 1;
  refs.counterValue.innerHTML = count;
});
