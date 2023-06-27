const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientItemArr = [];
// ingredients.forEach((ingredient) => {
//   const ingredientItem = document.createElement("li");
//   ingredientItem.classList.add("item");
//   ingredientItem.textContent = `${ingredient}`;
//   console.log(ingredientItem);
//   return ingredientItemArr.push(ingredientItem);
// });
// console.log(ingredientItemArr.join(""));
// const ingredientsList = document.querySelector("#ingredients");
// ingredientsList.insertAdjacentHTML("beforeend", ingredientItemArr.join(" "));

const ingredientsList = document.querySelector("#ingredients");
const ingredientItemArr = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.classList.add("item");
  ingredientItem.textContent = `${ingredient}`;
  //==========================
  console.log(ingredientItem);
  //==========================  
  return ingredientItem
});
//=======================================
// console.log(ingredientItemArr);

console.log(ingredientItemArr);
//=======================================
ingredientsList.insertAdjacentHTML("beforeend", ingredientItemArr);
// ingredientsList.insertAdjacentHTML("beforeend", ingredientItem);

// const arr = ["Mango", "Ajax", "Poly"];
// console.log(arr);
// const string = arr.join(" ");
// console.log(string);
