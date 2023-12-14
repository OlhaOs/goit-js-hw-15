const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueElem = document.querySelector('#value');
let counterValue = 0;

decrementBtn.addEventListener('click', handleClickDecrement);
incrementBtn.addEventListener('click', handleClickIncrement);

function handleClickDecrement() {
  counterValue--;
  updateCounterValue();
}
function handleClickIncrement() {
  counterValue++;
  updateCounterValue();
}
function updateCounterValue() {
  counterValueElem.textContent = counterValue;
}
