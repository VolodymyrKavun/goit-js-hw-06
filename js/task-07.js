const inputEl = document.querySelector('#font-size-control');

const textInputEl = document.querySelector('#text');

textInputEl.style.fontSize = `${inputEl.value}px`;

function noHandleInput(event) {
  textInputEl.style.fontSize = `${event.currentTarget.value}px`;
}

inputEl.addEventListener('input', noHandleInput);
