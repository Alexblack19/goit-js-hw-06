// const arr = [23, 56, 7, 9, 90, 45, 87];
// const newArr = [];
// arr.forEach((element) => {
//   if (element > 10) {
//     newArr.push(element);
//   }
// });
// console.log(newArr);

const categoriesNumber = document.querySelectorAll(".item h2");
console.log('Number of categories:', categoriesNumber.length);

document.querySelectorAll('.item ul').forEach(element => {
    console.log(categoriesNumber.textContent);
    console.log(element.textContent);    
});







