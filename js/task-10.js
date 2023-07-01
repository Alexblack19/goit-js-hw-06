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

const inputAttr = {
  min: Number(refs.inputEl.min),
  max: Number(refs.inputEl.max),
  step: Number(refs.inputEl.step),
};
const { min, max, step } = inputAttr;

refs.btnCreateEl.addEventListener("click", () => {
  const inputValue = Number(refs.inputEl.value);
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
  refs.divBoxesEl.insertAdjacentHTML("beforeend", divElArr.join(""));
}

function destroyBoxes() {
  refs.divBoxesEl.innerHTML = "";
  refs.inputEl.value = "";
}
refs.btnDestroyEl.addEventListener("click", destroyBoxes);