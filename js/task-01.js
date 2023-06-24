// const arr = [23, 56, 7, 9, 90, 45, 87];
// const newArr = [];
// arr.forEach((element) => {
//   if (element > 10) {
//     newArr.push(element);
//   }
// });
// console.log(newArr);

const categories = document.querySelectorAll(".item").children;
console.dir(categories);

const categoriesArr = [...categories]
console.dir(categoriesArr)
