const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
//
//*Варіант 1
//
const listEl = document.querySelector(".gallery");
listEl.style.listStyle = "none";
listEl.style.display = "flex";
listEl.style.flexWrap = "wrap";
listEl.style.justifyContent = "center";
listEl.style.gap = "20px";
listEl.style.alignItems = "center";

const imagesArr = images.map((image) => {
  const imgItemEl = `<li class = "item">
      <img src="${image.url}" alt="${image.alt}"/>
    </li>`;
  return imgItemEl;
});
listEl.insertAdjacentHTML("beforeend", imagesArr);
//
//*===================================
//
//*Варіант 2
//
// const listEl = document.querySelector(".gallery");
// listEl.style.listStyle = "none";
// listEl.style.display = "flex";
// listEl.style.flexWrap = "wrap";
// listEl.style.justifyContent = "center";
// listEl.style.gap = "20px";
// listEl.style.alignItems = "center";

// const makeGalleryImg = (imagesArr) => {
//   return imagesArr.map((image) => {
//     const imgItemEl = `<li class = "item">
//       <img src="${image.url}" alt="${image.alt}"/>
//     </li>`;
//     return imgItemEl;
//   });
// };

// const imagesListArr = makeGalleryImg(images);
// listEl.insertAdjacentHTML("beforeend", imagesListArr);
