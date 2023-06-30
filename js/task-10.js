function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputEl = document.querySelector('[type="number"]')
console.log(inputEl.value);

if(Number(inputEl.value) === 5) {
  console.log('Hello');
}



const btnCreateEl = document.querySelector('button[data-create]');
console.log(btnCreateEl);

const btnDestroyEl = document.querySelector('button[data-destroy]');
console.log(btnDestroyEl);

const divboxes = document.querySelector("#boxes");
console.log(divboxes);

// const amount = btnCreateEl.



// createBoxes(amount) {
//   btCreatenEl.addEventListener('click', (event)=>{

//   })
// }