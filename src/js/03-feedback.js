const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const localData = localStorage.getItem('feedback-form-state');
let formData = {};

if (localData !== null) {
  formData = JSON.parse(localData);
  form.email.value = formData.email;
  form.message.value = formData.message;
}

function onInput() {
  formData = { email: form.email.value, message: form.message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('input', throttle(onInput, 500));

form.addEventListener('submit', event => {
  event.preventDefault();

  console.log(formData);
  form.reset();
  localStorage.clear();
});
