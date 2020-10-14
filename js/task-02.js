const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];


const listIngredientsRef = document.createElement("ul");
listIngredientsRef.classList.add("ingredients-list");

const listIngredientsItemRef = ingredients;

const items = listIngredientsItemRef.reduce(
  (string, item) => string + `<li>${item}</li>`, ""
);

listIngredientsRef.innerHTML = items;
const ingredientsRootRef = document.querySelector(".js-ingredients");
ingredientsRootRef.appendChild(listIngredientsRef);
console.log(ingredientsRootRef);



