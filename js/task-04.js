//===========
//* Варіант 1
//===========
let counterValue = 0;

const btnDecrEl = document.querySelector('button[data-action = "decrement"]');
const btnIncrEl = document.querySelector('button[data-action = "increment"]');
const spanValueEl = document.querySelector("#value");

const onBtnClickDecr = () => {
  counterValue -= 1;
  spanValueEl.textContent = counterValue;  
};

const onBtnClickIncr = () => {
  counterValue += 1;
  spanValueEl.textContent = counterValue;
};

btnDecrEl.addEventListener("click", onBtnClickDecr);
btnIncrEl.addEventListener("click", onBtnClickIncr);

//===========
//* Варіант 2
//===========
// let counterValue = 0;

// const btnDecrEl = document.querySelector('button[data-action = "decrement"]');
// const btnIncrEl = document.querySelector('button[data-action = "increment"]');
// const spanValueEl = document.querySelector("#value");

// const onBtnClickDecr = () => {
//   counterValue += Number(btnDecrEl.textContent);
//   spanValueEl.textContent = counterValue;
// };

// const onBtnClickIncr = () => {
//   counterValue += Number(btnIncrEl.textContent);
//   spanValueEl.textContent = counterValue;
// };

// btnDecrEl.addEventListener("click", onBtnClickDecr);
// btnIncrEl.addEventListener("click", onBtnClickIncr);