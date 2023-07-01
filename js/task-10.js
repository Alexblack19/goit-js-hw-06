function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('[type="number"]');
const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");
const divboxes = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", () => {  
  const inputValue = Number(inputEl.value);
  return createBoxes(inputValue);
});

const divElArr = [];
console.log(divElArr);

function createBoxes(amount) {
  console.log(amount);
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divElArr.push(divEl);
  }
}

divboxes.append(...divElArr);