const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");
const itemArr = ingredients.map((ingredient) => {
  const ingredientItemEl = document.createElement("li");
  ingredientItemEl.classList.add("item");
  ingredientItemEl.textContent = `${ingredient}`;
  return ingredientItemEl;
});
console.log(itemArr);
listEl.append(...itemArr);



