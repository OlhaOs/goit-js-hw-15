const listElem = document.querySelectorAll('.item');

console.log('Number of categories: ', listElem.length);

listElem.forEach(element => {
  const categoryName = element.firstElementChild;

  console.log('Category: ', categoryName.textContent);

  const countListElem = categoryName.nextElementSibling.children.length;

  console.log('Elements: ', countListElem);
});
