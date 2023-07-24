const categoriesNumber = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesNumber.length}`);

categoriesNumber.forEach(categories => {
    const categoriesName = categories.firstElementChild;
    console.log(`Category: ${categoriesName.textContent}`);
    const elementsNumber = categories.lastElementChild.children;
    console.log(`Elements: ${elementsNumber.length}`);
});
