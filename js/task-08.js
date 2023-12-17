const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;

  if (!email.value) {
    showMessage(email);
    return;
  }
  if (!password.value) {
    showMessage(password);
    return;
  }

  const data = {
    email: email.value,
    password: password.value,
  };

  console.log(data);
  e.currentTarget.reset();
}
function showMessage(field) {
  alert(`Please, enter your ${field.name}`);
}
