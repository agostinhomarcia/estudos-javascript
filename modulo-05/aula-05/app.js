const article = document.querySelector("article");

Array.from(article.children).forEach((element) => {
  element.classList.add("article-element");
});
