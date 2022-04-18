const form = document.querySelector('.login-form');

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };

  if (formData.mail === '') {
    alert('Поле mail потрібно заповнити');
  } else if (formData.password === '') {
    alert('Поле password потрібно заповнити');
  }

  console.log(formData);

  form.reset();
}

form.addEventListener('submit', onFormSubmit);
