//============
//* Варіант 1
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
//* Варіант 2
//============
// const inputEl = document.querySelector("#validation-input");

// inputEl.addEventListener("blur", onInputBlur);

// function onInputBlur(event) {
//   const addTextLength = event.target.value.trim().length;
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
const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);
const dataTextLength = Number(inputEl.getAttribute("data-length"));

function onInputBlur(event) {
  inputEl.addEventListener("input", () => {
    const addTextLength = event.target.value.trim().length;

    if (addTextLength === dataTextLength) {
      inputEl.classList.remove("invalid");
      inputEl.classList.add("valid");
    } else {
      inputEl.classList.remove("valid");
      inputEl.classList.add("invalid");
    }
  });
}
