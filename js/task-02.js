const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientItem = document.createElement("li");

ingredients.forEach((ingredient) => {
  console.log(`<li>${ingredient}</li>`);
});
