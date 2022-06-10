
const form = document.querySelector('.login-form');


const onFormSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        const alert = document.createElement('h1');
        alert.style.color = 'red';
        alert.textContent = 'WARNING! Please fill in all the fields!';
        form.before(alert);
      return console.log('WARNING! Please fill in all the fields!');
    }

  console.log({ email, password });
  event.currentTarget.reset();

};

form.addEventListener('submit', onFormSubmit);
