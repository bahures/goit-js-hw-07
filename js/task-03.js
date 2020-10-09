const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createImageContent = (images) => {
  const listItem = document.createElement("li");
  listItem.classList.add("list-item");
  const listItemImage = document.createElement("img");
  listItemImage.classList.add("list-item__image");
  listItemImage.width = 300;
  listItemImage.height = 200;
  listItemImage.src = images.url;
  listItemImage.alt = images.alt;
  listItem.appendChild(listItemImage);
  const listRootRef = document.querySelector("#gallery");
  listRootRef.appendChild(listItem);

  return listItem;
};

const imageContent = images.map((image) => createImageContent(image));

const imageContentRef = document.querySelector("#gallery");
imageContentRef.append(...imageContent);
console.log(imageContentRef);
