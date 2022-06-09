const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

const ingredientRefs = ingredients.map(item => {
  const ingredient = document.createElement('li');
    ingredient.textContent = item;
    ingredient.classList = 'item';
    
  return ingredient;
});

list.append(...ingredientRefs);

