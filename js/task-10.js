function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const numberOfDivs = document.querySelector('input');
const boxes = document.querySelector('#boxes');

let size = 20;

function getAmount() {
  const amount = numberOfDivs.value;
  createBoxes(amount);
}

const createBoxes = amount => {
  const divArr = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10;

    const div = document.createElement('div');
    div.style.width = String(size) + 'px';
    div.style.height = String(size) + 'px';
    console.log('div.style.height', div.style.height.value);

    div.style.backgroundColor = getRandomHexColor();
    divArr.push(div);
    numberOfDivs.value = '';
  }
  boxes.append(...divArr);
};

function destroyBoxes() {
  boxes.innerHTML = '';
  size = 20;
}

btnCreate.addEventListener('click', getAmount);
btnDestroy.addEventListener('click', destroyBoxes);
