//============
//* Варіант 1
//============
const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur() {
  const addTextLength = inputEl.value.trim().length;
  const dataTextLength = Number(inputEl.getAttribute("data-length"));

  addTextLength === dataTextLength
    ? changeClass("valid", "invalid")
    : changeClass("invalid", "valid");

  function changeClass(first, second) {
    inputEl.classList.add(first);
    inputEl.classList.remove(second);
  }
}
//============
//* Варіант 2
//============
// const inputEl = document.querySelector("#validation-input");

// inputEl.addEventListener("blur", onInputBlur);

// function onInputBlur() {
//   const addTextLength = inputEl.value.trim().length;
//   const dataTextLength = Number(inputEl.getAttribute("data-length"));

//   if (addTextLength === dataTextLength) {
//     inputEl.classList.remove("invalid");
//     inputEl.classList.add("valid");
//   } else {
//     inputEl.classList.remove("valid");
//     inputEl.classList.add("invalid");
//   }
// }

//============
//* Варіант 3
//============
// const inputEl = document.querySelector("#validation-input");

// inputEl.addEventListener("blur", onInputBlur);

// function onInputBlur(event) {
//   const addTextLength = event.currentTarget.value.trim().length;
//   const dataTextLength = Number(inputEl.getAttribute("data-length"));

//   if (addTextLength === dataTextLength) {
//     inputEl.classList.remove("invalid");
//     inputEl.classList.add("valid");
//   } else {
//     inputEl.classList.remove("valid");
//     inputEl.classList.add("invalid");
//   }
// }
