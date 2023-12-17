const inputEL = document.querySelector('#validation-input');

inputEL.addEventListener('blur', handleBlur);

function handleBlur() {
  const requireLength = Number(inputEL.dataset.length);
  const currentLength = inputEL.value.length;

  inputEL.classList.toggle('valid', currentLength === requireLength);
  inputEL.classList.toggle('invalid', currentLength !== requireLength);
}
