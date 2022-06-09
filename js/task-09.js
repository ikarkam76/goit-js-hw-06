function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const textBgc = document.querySelector('.color');

changeColorBtn.addEventListener('click', () => {
  const color = getRandomHexColor();
  changeColorBtn.style.backgroundColor = color;
  textBgc.textContent = color;
});



