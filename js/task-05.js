const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputName);

function onInputName(evt) {
    !evt.currentTarget.value ?
        outputRef.textContent = 'Anonymous':outputRef.textContent = evt.currentTarget.value;
}