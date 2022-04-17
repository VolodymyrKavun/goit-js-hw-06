const allItemEl = document.querySelectorAll('.item');
console.log(`Number of categories:`, allItemEl.length);
allItemEl.children;
allItemEl.forEach(element => {
  console.log(`Category:`, element.firstElementChild.textContent);
  console.log(`Elements:`, element.lastElementChild.children.length);
});
