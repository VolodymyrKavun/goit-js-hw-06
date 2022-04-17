const inputEl = document.querySelector('input');

const inputLengthEl = document.querySelector('input[data-length="6"]');

let numberInput = Number(inputLengthEl.dataset.length);

function onInputExamination() {
  if (numberInput === inputEl.value.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}

inputEl.addEventListener('blur', onInputExamination);
