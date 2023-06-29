const textInput = document.querySelector("#name-input");
console.log(textInput);
const textOutput = document.querySelector("#name-output");
console.log(textOutput);

const textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
  });
