const inputEl = document.querySelector("#validation-input");

// const addTextLength = inputEl.addEventListener("input", (event) => {
//   const addTextLength = event.currentTarget.value.length;
// });

// console.log(addTextLength);

// const onValidationInput = () => {
//   if (Number(inputEl.dataset.length) === addTextLength) {
//     console.log("Hello");
//     //   inputEl.classList.add("valid");
//     return;
//   }
//   console.log("No");
//   //   inputEl.classList.add("invalid");
//   return;
// };

// // inputEl.addEventListener("blur", onValidationInput);

// const onValidationInput = () => {
//   inputEl.addEventListener("input", (event) => {
//     const addTextLength = event.currentTarget.value.length;
//     console.log(addTextLength);

//     if (inputEl.getAttribute('data-length') === addTextLength) {
//       console.log("Hello");
//       inputEl.classList.add("valid");
//       return;
//     } else {
//       console.log("No");
//       inputEl.classList.add("invalid");
//       return;
//     }

//   });
//   return
// };

// inputEl.addEventListener("blur", onValidationInput);


const addTextLength = inputEl.value.trim();
console.log(addTextLength);

const dataTextLength = Number(inputEl.getAttribute('data-length'));
console.log(dataTextLength);



