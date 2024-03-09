const categoriList = document.querySelector(`#categories`);
const categoriItem = categoriList.children;
console.log(`Number of categories: ${categoriItem.length}`);

Array.from(categoriItem).forEach((item) => {
  const categoriesTitle = item.firstElementChild.textContent;
  console.log(`Category: ${categoriesTitle}`);

  const categoriesEl = item.lastElementChild.children;
  console.log(`Elements: ${categoriesEl.length}`);
});
