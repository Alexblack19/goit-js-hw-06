const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
