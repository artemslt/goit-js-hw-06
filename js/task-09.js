function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const div = document.querySelector('.widget');
const btn = document.querySelector('.change-color');
const color = document.querySelector('.color');

const changeDivColor = () => {
  const rendomColorValue = getRandomHexColor();
  div.style.backgroundColor = rendomColorValue;
  color.textContent = rendomColorValue;
};

btn.addEventListener('click', changeDivColor);
