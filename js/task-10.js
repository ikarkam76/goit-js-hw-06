function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('.boxes');

const collectionBoxes = [];

inputNumber.addEventListener('input', () => {
  console.log(inputNumber.value);

    createBtn.addEventListener('click', () => {
      for (let i = 0; i < inputNumber.value; i += 1) {
        const size = 30 + i * 10;
        const box = document.createElement('div');
        // box.classList.add(`box-${i}`);
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgrouhdColor = getRandomHexColor();
        // console.log(box);

        collectionBoxes.push(box);
      }
      console.log(collectionBoxes);

    });
});

// boxes.append(...collectionBoxes);


