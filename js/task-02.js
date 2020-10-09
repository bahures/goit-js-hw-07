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

const listIngredientsListRef0 = document.createElement("li");
listIngredientsListRef0.textContent = ingredients[0];
listIngredientsListRef0.classList.add("ingredients-list_item");

const listIngredientsListRef1 = document.createElement("li");
listIngredientsListRef1.textContent = ingredients[1];
listIngredientsListRef1.classList.add("ingredients-list_item");

const listIngredientsListRef2 = document.createElement("li");
listIngredientsListRef2.textContent = ingredients[2];
listIngredientsListRef2.classList.add("ingredients-list_item");

const listIngredientsListRef3 = document.createElement("li");
listIngredientsListRef3.textContent = ingredients[3];
listIngredientsListRef3.classList.add("ingredients-list_item");

const listIngredientsListRef4 = document.createElement("li");
listIngredientsListRef4.textContent = ingredients[4];
listIngredientsListRef4.classList.add("ingredients-list_item");

const listIngredientsListRef5 = document.createElement("li");
listIngredientsListRef5.textContent = ingredients[5];
listIngredientsListRef5.classList.add("ingredients-list_item");

listIngredientsRef.append(
  listIngredientsListRef0,
  listIngredientsListRef1,
  listIngredientsListRef2,
  listIngredientsListRef3,
  listIngredientsListRef4,
  listIngredientsListRef5
);

const ingredientsRootRef = document.querySelector(".js-ingredients");
ingredientsRootRef.appendChild(listIngredientsRef);

console.log(ingredientsRootRef);
