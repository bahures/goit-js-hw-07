const categoryListRef = document.querySelectorAll(".item");
console.log(`в списке ${categoryListRef.length} категории`);


for (let i = 0; i < categoryListRef.length; i += 1) {
console.log("Категория :", categoryListRef[i].firstElementChild.textContent);
console.log("Количество элементов :", categoryListRef[i].lastElementChild.childElementCount);
}

