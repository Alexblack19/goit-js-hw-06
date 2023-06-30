function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('[type="number"]');

const btnCreateEl = document.querySelector("button[data-create]");
console.log(btnCreateEl);

const btnDestroyEl = document.querySelector("button[data-destroy]");
console.log(btnDestroyEl);

const divboxes = document.querySelector("#boxes");
console.log(divboxes);

btnCreateEl.addEventListener("click", () => {
  const inputValue = Number(inputEl.value);
  return createBoxes(inputValue);
});

function createBoxes(amount) {
  console.log(amount);
  console.log("Hello");
  const divEl = document.createElement("div");
  divboxes.append(divEl);
}

// inputEl.addEventListener("input", (event) => {
//   const amount = Number(event.currentTarget.value);
//   createBoxes (amount)
//   function createBoxes (amount) {

//     btnCreateEl.addEventListener('click', ()=>{
//       divboxes.createElement('div')

//     })
//   }

// });
