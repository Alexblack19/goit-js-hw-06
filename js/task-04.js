//===========
//* Варіант 1
//===========
let counterValue = 0;

const btnDecrEl = document.querySelector('button[data-action = "decrement"]');
const btnIncrEl = document.querySelector('button[data-action = "increment"]');
const spanValueEl = document.querySelector("#value");

const handleBtnClickDecr = () => {
  counterValue -= 1;
  spanValueEl.textContent = counterValue;  
};

const handleBtnClickIncr = () => {
  counterValue += 1;
  spanValueEl.textContent = counterValue;
};

btnDecrEl.addEventListener("click", handleBtnClickDecr);
btnIncrEl.addEventListener("click", handleBtnClickIncr);

//===========
//* Варіант 2
//===========
// let counterValue = 0;

// const btnDecrEl = document.querySelector('button[data-action = "decrement"]');
// const btnIncrEl = document.querySelector('button[data-action = "increment"]');
// const spanValueEl = document.querySelector("#value");

// const handleBtnClickDecr = () => {
//   counterValue += Number(btnDecrEl.textContent);
//   spanValueEl.textContent = counterValue;
// };

// const handleBtnClickIncr = () => {
//   counterValue += Number(btnIncrEl.textContent);
//   spanValueEl.textContent = counterValue;
// };

// btnDecrEl.addEventListener("click", handleBtnClickDecr);
// btnIncrEl.addEventListener("click", handleBtnClickIncr);