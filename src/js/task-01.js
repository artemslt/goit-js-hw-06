const listOfCategories = document.querySelectorAll(".item");
console.log("Number of categories: ", listOfCategories.length);

const discription = listOfCategories.forEach((item) => {
  const title = item.querySelector("h2");
  console.log("Category: ", title.textContent);

  const numberOfElements = item.querySelectorAll("li");
  console.log("Elements: ", numberOfElements.length);
});
