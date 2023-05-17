// buscandos as referencia no DOM

const lis = document.querySelectorAll("li");

// // como modificar um elemento no DOM

lis.forEach((li) => {
  li.addEventListener("click", (event) => {
    const clickedElement = event.target;

    clickedElement.style.textDecoration = "line-through";
  });
});

// como remover e adicionar um elemento

const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Novo Item";

  ul.prepend(li);
});

ul.addEventListener("click", (event) => {
  const clickedElement = event.target;

  if (clickedElement.tagName === "LI") {
    clickedElement.remove();
  }
});
