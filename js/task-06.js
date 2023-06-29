const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("input", (event) => {
  const addTextLength = event.currentTarget.value.length;
  return addTextLength;
});
console.log(addTextLength);







const onValidationInput = () => {
  if (Number(inputEl.dataset.length) === i) {
    console.log("Hello");
    // inputEl.classList.add("valid");
    return;
  }
  console.log("No");
  //   inputEl.classList.add("invalid");
};

inputEl.addEventListener("blur", onValidationInput);
