const inputEl = document.querySelector('#font-size-control');
const spanEL = document.querySelector('#text');

inputEl.addEventListener('input', handleInputRange);

function handleInputRange() {
  spanEL.style.fontSize = `${inputEl.value}px`;
}
