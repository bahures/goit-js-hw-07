const linksItemsRef = document.querySelectorAll(".item");
console.log(`в списке ${linksItemsRef.length} категории`);

const titleAnimalsRef = document.querySelector(".title-animals");
const animalsListItem = document.querySelectorAll(".animals_list__item");
console.log("Категория :", titleAnimalsRef.textContent);
console.log("Количество элементов :", animalsListItem.length);

const titleProductsRef = document.querySelector(".title-products");
const productslsListItem = document.querySelectorAll(".products_list__item");
console.log("Категория :", titleProductsRef.textContent);
console.log("Количество элементов :", productslsListItem.length);

const titleProgramsRef = document.querySelector(".title-programs");
const programsListItem = document.querySelectorAll(".programs_list__item");
console.log("Категория :", titleProgramsRef.textContent);
console.log("Количество элементов :", programsListItem.length);
