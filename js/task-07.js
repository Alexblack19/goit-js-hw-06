const inputRangeEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputRangeEl.addEventListener("change", () => {
  spanEl.style.fontSize = `${inputRangeEl.value}px`;
});
