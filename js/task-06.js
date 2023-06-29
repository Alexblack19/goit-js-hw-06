const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("input", (event) => {
  const addTextLength = event.currentTarget.value.length;
  console.log(addTextLength);


  const onValidationInput = () => {
    if (Number(inputEl.dataset.length) === addTextLength) {
      console.log("Hello");
    //   inputEl.classList.add("valid");
      return;
    }
    console.log("No");
    //   inputEl.classList.add("invalid");
    return
  };
  
  inputEl.addEventListener("blur", onValidationInput);



});


