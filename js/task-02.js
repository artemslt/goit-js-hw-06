const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

const createLi = item => {
  const listItem = document.createElement('li');
  listItem.className = 'item';
  listItem.textContent = item;
  return listItem;
};

const ingredientsListItems = ingredients.map(item => createLi(item));

ingredientsList.append(...ingredientsListItems);
