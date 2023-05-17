// 01 gere um novo array com apenas os números ímpares do array e exiba o novo array no console.
// usei o filter para chegar ao resultado
const randomNumbers = [10, 30, 15, 25, 50, 40, 5];

const oddNumbers = randomNumbers.filter(
  (randomNumber) => randomNumber % 2 === 1
);

// console.log(oddNumbers);

// 02 exiba no console quantos números abaixo de 501 o array possui.
// usei o reduce para chegar ao resultado

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691];

const count = crazyNumbers.reduce((accumulator, crazyNumber) => {
  return crazyNumber < 501 ? accumulator + 1 : accumulator;
}, 0);

// console.log(count);

// gere um novo array com cada um dos números abaixo elevados ao quadrado e exiba o novo array no console
// usei o map para chegar ao resultado

const numbers = [5, 7, 6, 8, 3, 2];

const squareNumbers = numbers.map((number) => number ** 2);

// console.log(numbers, "array com numeros elevados ao quadrado", squareNumbers);

// utilizando o array abaixo, gere um novo array com filmes lançados antes de 2000.
// Exiba no console

const movies = [
  { title: "The Godfather", releaseDate: "1972" },
  { title: "The Shawshank Redemption", releaseDate: "1994" },
  { title: "The Dark Knight", releaseDate: "2008" },
  { title: "The Godfather: Part II", releaseDate: "1974" },
  { title: "12 Angry Men", releaseDate: "1957" },
  { title: "Schindler's List", releaseDate: "1993" },
  { title: "The Lord of the Rings", releaseDate: "2001" },
  { title: "Fight Club", releaseDate: "1999" },
  { title: "Star Wars: Episode IV - A New Hope", releaseDate: "1977" },
  { title: "Goodfellas", releaseDate: "1990" },
];

const moviesResults = movies.filter((movie) => movie.releaseDate < 2000);
// console.log(moviesResults);

// gere um novo array que contém os nomes dos filmes abaixo. exiba no console

// usei map

const tvShows = [
  { title: "The Godfather", releaseDate: "1972" },
  { title: "The Shawshank Redemption", releaseDate: "1994" },
  { title: "The Dark Knight", releaseDate: "2008" },
  { title: "The Lord of the Rings", releaseDate: "2003" },
  { title: "Schindler's List", releaseDate: "1993" },
  { title: "Forrest Gump", releaseDate: "1994" },
  { title: "Star Wars: Episode IV - A New Hope", releaseDate: "1977" },
  { title: "Pulp Fiction", releaseDate: "1994" },
  { title: "The Silence of the Lambs", releaseDate: "1991" },
  { title: "Fight Club", releaseDate: "1999" },
];

const nameMovies = tvShows.map((tvshow) => tvshow.title);

// console.log(nameMovies);

const phaseScores = [
  { name: "Vitor Silva", score: 330 },
  { name: "Jonas Marques", score: 150 },
  { name: "Marta Souza", score: 250 },
  { name: "Vitor Silva", score: 250 },
  { name: "Bruno Oliveira", score: 90 },
  { name: "Marcos Ferreira", score: 180 },
  { name: "Thomaz Marques", score: 200 },
  { name: "Vitor Silva", score: 260 },
  { name: "Marta Souza", score: 250 },
];

const vitorScore = phaseScores.reduce((accumulator, phaseScore) => {
  if (phaseScore.name === "Vitor Silva") {
    return accumulator + phaseScore.score;
  }
  return accumulator;
}, 0);

console.log(vitorScore);
