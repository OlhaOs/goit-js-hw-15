function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', handleBtnCreateClick);
destroyBtn.addEventListener('click', handleBtnDestroyClick);

function handleBtnCreateClick() {
  destroyBoxes();
  createBoxes();
  inputEl.value = '';
}
function handleBtnDestroyClick() {
  destroyBoxes();
}
function destroyBoxes() {
  divEl.innerHTML = '';
}
function createBoxes() {
  const boxes = createMarkup(inputEl.value);
  divEl.append(...boxes);
}

function createMarkup(amount) {
  const markup = [];
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    markup.push(newDiv);
  }

  return markup;
}
