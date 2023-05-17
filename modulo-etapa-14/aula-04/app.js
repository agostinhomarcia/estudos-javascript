class Mammal {
  constructor(species, name, age) {
    this.species = species;
    this.name = name;
    this.mammaryGland = true;
  }
  incrementAge() {
    this.age++;
  }
}

class Lion extends Mammal {
  eatZebras(animals) {
    return animals.filter((animal) => animal.species !== "zebra");
  }
}

const zeca = new Mammal("zebra", "zeca", 6);
const pompeu = new Mammal("gnu", "Pompeu", 5);
const angus = new Mammal("cavalo", "Angus", 3);
const mufasa = new Mammal("leão", "Mufasa", 7);

const animals = [zeca, pompeu, angus];

console.log(mufasa.eatZebras(animals));
