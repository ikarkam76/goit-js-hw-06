const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', (event) => {
    if (!event.currentTarget.value) {
      inputRef.removeEventListener('input');
    }
    outputRef.textContent = event.currentTarget.value;
    
});