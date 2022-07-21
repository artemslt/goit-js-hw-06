const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const ingredientsListItem = [];
const list = ingredients.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.className = "item";
  listItem.textContent = item;
  ingredientsListItem.push(listItem);
});
ingredientsList.append(...ingredientsListItem);
