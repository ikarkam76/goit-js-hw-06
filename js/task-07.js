const inputChangeRef = document.querySelector('#font-size-control');
const changeText = document.querySelector('#text');

const onChangeFontSize = (size) => {
    changeText.style.fontSize = `${size.currentTarget.value}px`;
};


inputChangeRef.addEventListener('input', onChangeFontSize);

