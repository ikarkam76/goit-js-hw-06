const categoriesList = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categoriesList.length);

for (let i = 0; i < categoriesList.length; i += 1) {
    console.log('Category: ', categoriesList[i].firstElementChild.textContent);
    console.log('Elements: ', categoriesList[i].lastElementChild.children.length);
};

