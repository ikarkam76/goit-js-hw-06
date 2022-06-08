const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

const ingredientRefs = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = document.createElement('li');
    ingredient.textContent = ingredients[i];
    ingredient.classList = 'item';
    
  ingredientRefs.push(ingredient);
};

list.append(...ingredientRefs);

