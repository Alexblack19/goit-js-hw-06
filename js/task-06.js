//============
//* Варіант 1
//============
const inputEl = document.querySelector("#validation-input");

const onInputBlur = () => {
  const addTextLength = inputEl.value.trim().length;
  const dataTextLength = Number(inputEl.getAttribute("data-length"));

  if (addTextLength === dataTextLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", onInputBlur);

//============
//* Варіант 2
//============
// const inputEl = document.querySelector("#validation-input");

// const onInputBlur = (event) => {
//   const addTextLength = event.target.value.trim().length;
//   const dataTextLength = Number(inputEl.getAttribute("data-length"));

//   if (addTextLength === dataTextLength) {
//     inputEl.classList.remove("invalid");
//     inputEl.classList.add("valid");
//   } else {
//     inputEl.classList.remove("valid");
//     inputEl.classList.add("invalid");
//   }
// };

// inputEl.addEventListener("blur", onInputBlur);
