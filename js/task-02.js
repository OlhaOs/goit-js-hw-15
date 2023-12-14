const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElem = document.querySelector('#ingredients');

const markup = ingredients.map(item => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = item;
  return li;
});

ulElem.append(...markup);
