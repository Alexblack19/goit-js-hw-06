const inputRangeEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

function changeSize() {
  spanEl.style.fontSize = `${inputRangeEl.value}px`;
}
inputRangeEl.addEventListener("input", changeSize);
changeSize();
