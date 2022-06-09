const refs = {
    addBtn: document.querySelector('[data-action="increment"]'),
    removeBtn: document.querySelector('[data-action="decrement"]'),
    valueRef: document.querySelector('#value'),
};

let counterValue = 0;

const onAddCounterValue = () => {
  refs.valueRef.textContent = counterValue += 1;
};
const onRemoveCounterValue = () => {
  refs.valueRef.textContent = counterValue -= 1;
};


refs.addBtn.addEventListener('click', onAddCounterValue);
refs.removeBtn.addEventListener('click', onRemoveCounterValue);
