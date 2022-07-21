let counterValue = 0;
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector("#value");

const incrementBtnClick = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

const decrementBtnClick = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

incrementBtn.addEventListener("click", incrementBtnClick);
decrementBtn.addEventListener("click", decrementBtnClick);
