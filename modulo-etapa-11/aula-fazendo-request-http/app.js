i;

const getPokemon = (url) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      const isRequestOk = request.readyState === 4 && request.status === 200;
      const isRequestNotOk = request.readyState === 4;

      if (isRequestOk) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      }
      if (isRequestNotOk) {
        reject("Não foi possível obter os dados");
      }
    });

    request.open("GET", url);
    request.send();
  });

getPokemon("https://pokeapi.co/api/v2/pokemon/1")
  .then((bulbasar) => {
    console.log(bulbasar);
    return getPokemon("https://pokeapi.co/api/v2/pokemon/4");
  })
  .then((charmander) => {
    console.log(charmander);
    return getPokemon("https://pokeapi.co/api/v2/pokemon/7");
  })
  .then((squirtle) => console.log(squirtle))

  .catch((error) => console.log(error));
