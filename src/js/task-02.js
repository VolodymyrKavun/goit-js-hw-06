const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('#ingredients');

const makeAllIngredientsEl = elem => {
  return elem.map(element => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = element;

    return itemEl;
  });
};

const itemAllEl = makeAllIngredientsEl(ingredients);

listEl.append(...itemAllEl);
