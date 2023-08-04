import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const dataForm = JSON.parse(localStorage.getItem('feedback-form-state'));

form.elements.email.addEventListener(
  'input',
  throttle(e => {
    const dataObj = JSON.parse(localStorage.getItem('feedback-form-state'));

    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({ ...dataObj, email: e.target.value })
    );
  }),
  500
);

if (dataForm !== null && dataForm.email !== undefined) {
  form.elements.email.value = dataForm.email;
}

form.elements.message.addEventListener(
  'input',
  throttle(e => {
    const dataObj = JSON.parse(localStorage.getItem('feedback-form-state'));

    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({ ...dataObj, message: e.target.value })
    );
  }, 500)
);

if (dataForm !== null && dataForm.message !== undefined) {
  form.elements.message.value = dataForm.message;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
