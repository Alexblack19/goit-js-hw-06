function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector('[type="number"]'),
  btnCreateEl: document.querySelector("[data-create]"),
  btnDestroyEl: document.querySelector("[data-destroy]"),
  divBoxesEl: document.querySelector("#boxes"),
};
const { inputEl, btnCreateEl, btnDestroyEl, divBoxesEl } = refs;

const inputAttr = {
  min: Number(inputEl.min),
  max: Number(inputEl.max),
  step: Number(inputEl.step),
};
const { min, max, step } = inputAttr;

btnCreateEl.addEventListener("click", () => {
  const inputValue = Number(inputEl.value);
  return createBoxes(inputValue);
});

function createBoxes(amount) {
  if (amount < min || amount > max) {
    alert("Enter a value between 1 and 100");
    return;
  }

  const divElArr = [];
  let sizeBox = 30;
  for (let i = 0; i < amount; i += step) {
    const divEl = `<div style = "width: ${sizeBox}px; height: ${sizeBox}px; background-color:${getRandomHexColor()}"></div>`;
    divElArr.push(divEl);
    sizeBox += 10;
  }
  divBoxesEl.insertAdjacentHTML("beforeend", divElArr.join(""));
}

function destroyBoxes() {
  divBoxesEl.innerHTML = "";
  inputEl.value = "";
}
btnDestroyEl.addEventListener("click", destroyBoxes);
