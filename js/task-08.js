
const form = document.querySelector('.login-form');

const onFormSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return console.log('WARNING! Please fill in all the fields!');
  }
  const inputs = {
    email: email.value,
    password: password.value,
   }

  console.log(inputs);

  event.currentTarget.reset();

};

form.addEventListener('submit', onFormSubmit);


