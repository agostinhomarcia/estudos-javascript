//adicionando valores as chaves

localStorage.setItem("name", "Márcia");
localStorage.setItem("age", "36");

let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

// modificando valores das chaves

localStorage.setItem("name,", "Zé");
localStorage.setItem("age,", "45");

name.localStorage.getItem("name");
age.localStorage.getItem("age");

console.log(name, age);

//removendo valores

localStorage.removeItem("name"); // para limpar apenas um item
localStorage.clear(); // para remover todos os itens
