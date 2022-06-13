function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputData = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const collectionBoxes = [];

const createBoxes = () => {
  if (inputData.value <= 100) {
    for (let i = 0; i < inputData.value; i += 1) {
      const size = 30 + i * 10;
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.marginTop = '1px';
      box.style.fontSize = `${i + 8}px`;
      box.textContent = `box ${i + 1}`;
      box.style.textAlign = 'center';
      box.style.backgroundColor = getRandomHexColor();
      collectionBoxes.push(box);
    }
    boxes.append(...collectionBoxes);
  } else {
    alert('WARNING! the number should not be more than 100!');
  };
};

const destroyBoxes = () => {
  inputData.value = '';
  collectionBoxes.splice(0, collectionBoxes.length);
  boxes.innerHTML = '';
};

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

     




