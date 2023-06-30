//===========
//* Варіант 1
//===========
let counterValue = 0;

const btnDecrEl = document.querySelector('button[data-action = "decrement"]');
const btnIncrEl = document.querySelector('button[data-action = "increment"]');
const spanValueEl = document.querySelector("#value");

btnDecrEl.addEventListener("click", onBtnClickDecr);
btnIncrEl.addEventListener("click", onBtnClickIncr);

function onBtnClickDecr() {
  counterValue += Number(btnDecrEl.textContent);
  spanValueEl.textContent = counterValue;
}

function onBtnClickIncr() {
  counterValue += Number(btnIncrEl.textContent);
  spanValueEl.textContent = counterValue;
}

//===========
//* Варіант 2
//===========
// let counterValue = 0;

// const btnDecrEl = document.querySelector('button[data-action = "decrement"]');
// const btnIncrEl = document.querySelector('button[data-action = "increment"]');
// const spanValueEl = document.querySelector("#value");

// btnDecrEl.addEventListener("click", onBtnClickDecr);
// btnIncrEl.addEventListener("click", onBtnClickIncr);

// function onBtnClickDecr() {
//   counterValue -= 1;
//   spanValueEl.textContent = counterValue;
// }

// function onBtnClickIncr() {
//   counterValue += 1;
//   spanValueEl.textContent = counterValue;
// }