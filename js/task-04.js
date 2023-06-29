//===========
//* Варіант 1
//===========
let counterValue = 0;

const btnDecrEl = document.querySelector('button[data-action = "decrement"]');
const btnIncrEl = document.querySelector('button[data-action = "increment"]');
const spanValueEl = document.querySelector("#value");

const handleClickDecr = () => {
  counterValue -= 1;
  spanValueEl.textContent = counterValue;
};

const handleClickIncr = () => {
  counterValue += 1;
  spanValueEl.textContent = counterValue;
};

btnDecrEl.addEventListener("click", handleClickDecr);
btnIncrEl.addEventListener("click", handleClickIncr);

//===========
//* Варіант 2
//===========
// let counterValue = 0;

// const btnDecrEl = document.querySelector('button[data-action = "decrement"]');
// const btnIncrEl = document.querySelector('button[data-action = "increment"]');
// const spanValueEl = document.querySelector("#value");

// const handleClickDecr = () => {
//   counterValue += Number(btnDecrEl.textContent);
//   spanValueEl.textContent = counterValue;
// };

// const handleClickIncr = () => {
//   counterValue += Number(btnIncrEl.textContent);
//   spanValueEl.textContent = counterValue;
// };

// btnDecrEl.addEventListener("click", handleClickDecr);
// btnIncrEl.addEventListener("click", handleClickIncr);