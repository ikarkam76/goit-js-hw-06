const validationInputRef = document.querySelector('#validation-input');
const inputLengthRef = validationInputRef.getAttribute('data-length');

const onAuditInputRef = () => {
    if (validationInputRef.value.length === Number(inputLengthRef)) {
        validationInputRef.classList.add('valid');
    } else {
        validationInputRef.classList.add('invalid');
    }
};

validationInputRef.addEventListener('blur', onAuditInputRef);




  





