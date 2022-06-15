const validationInputRef = document.querySelector('#validation-input');
const inputLengthRef = validationInputRef.getAttribute('data-length');

const onAuditInputRef = (evt) => {
    if (evt.currentTarget.value.length === Number(inputLengthRef)) {
        if (validationInputRef.classList.value === 'invalid') { 
            validationInputRef.classList.replace('invalid', 'valid');
        }
          validationInputRef.classList.add('valid');
    } else {
        if (validationInputRef.classList.value === 'valid') {
          validationInputRef.classList.replace('valid', 'invalid');
        }
        validationInputRef.classList.add('invalid');
    }

    console.log(validationInputRef.classList.value);
};

validationInputRef.addEventListener('blur', onAuditInputRef);




  





