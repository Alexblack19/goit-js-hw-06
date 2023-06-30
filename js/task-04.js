//===========
//* Варіант 1
//===========

const btnDecrEl = document.querySelector('button[data-action = "decrement"]');
const btnIncrEl = document.querySelector('button[data-action = "increment"]');
const spanValueEl = document.querySelector("#value");

btnDecrEl.addEventListener("click", onBtnClickDecr);
btnIncrEl.addEventListener("click", onBtnClickIncr);

let counterValue = 0;

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

// const refs = {
//   btnDecrEl: document.querySelector('button[data-action = "decrement"]'),
//   btnIncrEl: document.querySelector('button[data-action = "increment"]'),
//   spanValueEl: document.querySelector("#value"),
// };

// refs.btnDecrEl.addEventListener("click", onBtnClickDecr);
// refs.btnIncrEl.addEventListener("click", onBtnClickIncr);

// let counterValue = 0;

// function onBtnClickDecr() {
//   counterValue -= 1;
//   refs.spanValueEl.textContent = counterValue;
// }

// function onBtnClickIncr() {
//   counterValue += 1;
//   refs.spanValueEl.textContent = counterValue;
// }
