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

const list = document.querySelector(".gallery");
const imgs = images
  .map((img) => `<li> <img src=${img.url} alt=${img.alt}> </li>`)
  .join("");
list.insertAdjacentHTML("beforeEnd", imgs);
const img = list.querySelectorAll("img");
list.style.listStyle = "none";
list.style.display = "flex";
img.forEach((item) => {
  item.style.width = "120px";
});
