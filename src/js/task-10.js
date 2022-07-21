function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const numberOfDivs = document.querySelector("input");
const boxes = document.querySelector("#boxes");

function getAmount() {
  const amount = numberOfDivs.value;
  createBoxes(amount);
}

const createBoxes = (amount) => {
  const divArr = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    const size = String(30 + i * 10) + "px";
    div.style.width = size;
    div.style.height = size;
    div.style.backgroundColor = getRandomHexColor();
    divArr.push(div);
    numberOfDivs.value = "";
  }
  boxes.append(...divArr);
};

function destroyBoxes() {
  boxes.innerHTML = "";
}

btnCreate.addEventListener("click", getAmount);
btnDestroy.addEventListener("click", destroyBoxes);
