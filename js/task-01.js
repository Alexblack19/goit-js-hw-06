const categoriesAll = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesAll.length}`);

categoriesAll.forEach(categories => {
    const categoriesName = categories.firstElementChild;
    console.log(`Category: ${categoriesName.textContent}`);    

    const elementsNumber = categoriesName.nextElementSibling.children;
    console.log(`Elements: ${elementsNumber.length}`);    
});