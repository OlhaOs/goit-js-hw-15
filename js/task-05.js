const inputEl = document.querySelector('#name-input');
const inputValue = document.querySelector('#name-output');

inputEl.addEventListener('input', handleInput);


function handleInput(e) {
    inputValue.textContent = e.target.value.trim() || 'Anonymous';
  }
