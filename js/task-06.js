const inputEl = document.querySelector("#validation-input");

const onCalcLetterEnter = () => {
    const number = 6;
    return number
}


const onValidationInput = () => {  
  if (inputEl.dataset.length === onCalcLetterEnter) {
    console.log("Hello");
    inputEl.classList.add('valid');
    return;
  }
  console.log("No");
  inputEl.classList.add('invalid');
};

inputEl.addEventListener("blur", onValidationInput);
