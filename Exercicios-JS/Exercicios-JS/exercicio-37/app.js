/*
  01

  - Descomente a let abaixo, descubra o que o código está tentando fazer e 
    faça-o funcionar.
*/

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = new Date();
  }
}

let rabbit = new Rabbit("White Rabbit");
console.log(rabbit);

/*
  02

  - Descomente o código abaixo e implemente o que está faltando para que ele 
    funcione.
*/
const formattedTimeUnits = (units) =>
  units.map((unit) => (unit < 10 ? `0${unit}` : unit));

const getTime = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return [hours, minutes, seconds];
};

const getFormattedTime = (template) => {
  const [hours, minutes, seconds] = getTime();
  const formattedTimes = formattedTimeUnits([hours, minutes, seconds]);

  return template
    .split(":")
    .map((_, index) => formattedTimes[index])
    .join(":");
};

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    const formattedTime = getFormattedTime(this.template);
    console.log(formattedTime);
  }

  start() {
    this.onSeccond = 1000;
    this.render();
    this.timer = setInterval(() => this.render(), this.onSeccond);
  }

  stop() {
    clearInterval(this.timer);
  }
}

class ExtendedClock extends Clock {
  constructor(options) {
    super(options);

    const { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

const clock = new ExtendedClock({ template: "h:m:s", precision: 1000 });

// clock.start();
// class Clock {
//   constructor ({ template }) {
//     this.template = template
//   }

//   render () {
//     const date = new Date()
//     let hours = date.getHours()
//     let minutes = date.getMonth()
//     let seconds = date.getSeconds()

//     if (hours < 10) {
//       hours = `0${hours}`
//     }

//     if (minutes < 10) {
//       minutes = `0${minutes}`
//     }

//     if (seconds < 10) {
//       seconds = `0${seconds}`
//     }

//     const formattedTime = this.template
//       .replace('h', hours)
//       .replace('m', minutes)
//       .replace('s', seconds)

//     console.log(formattedTime)
//   }

//   start () {
//     this.render()
//     this.timer = setInterval(() => this.render(), 1000)
//   }

//   stop () {
//     clearInterval(this.timer)
//   }
// }

// class ExtendedClock extends Clock {
//   constructor ({ options }) {
//     super(options)

//     let { precision = 1000 } = options
//     this.precision = precision
//   }

//   start () {
//     this.render()
//     this.timer = setInterval(() => this.render(), this.precision)
//   }
// }

// const clock = ExtendedClock({ template: 'h:m:s', precision: 1000 })

// clock.start()

/*
  05

  - No index.html há um elemento "textarea" e um parágrafo. A cada vez que um 
    caractere for inserido no textarea, exiba no parágrafo a quantidade de 
    caracteres que o textarea contém.
*/
const textArea = document.querySelector('[data-js="textarea"]');
const counterParagraph = document.querySelector('[data-js="paragraph"]');

const showCounterParagraph = (event) => {
  const currentLength = event.target.value.length;
  const maxLength = event.target.getAttribute("maxlength");

  counterParagraph.textContent = `${currentLength}/${maxLength}`;
};

textArea.addEventListener("input", showCounterParagraph);
/*
  06

  - Já implementamos os métodos forEach, some, map e filter, do zero;
  - Neste exercício, seu desafio será criar, do zero, o método reduce;
  - Implemente uma função "reduce" que possui a mesma funcionalidade do método 
    reduce original;
  - Você não poderá utilizar o método reduce original, embutido na linguagem;
  - A assinatura e retorno da invocação desta função devem ser os seguintes:
    - reduce([1, 2, 3], (acc, item) => acc + item, 0) // 6;
    - reduce([2, 3, 4], (acc, item) => acc + item, 0) // 9;
    - reduce(
        [1, 2],
        (acc, item) => {
          acc['number-' + item] = item
          return acc
        },
        {}
      ) // {"number-1": 1, "number-2": 2};
    - reduce([1, 2], (acc, item, index) => acc + index, 0) // 1;
    - reduce([1, 2], (acc, item, index, array) => acc + array[index], 0) // 3;
  - Utilize os casos de uso acima para testar sua função;
  - Se você não se lembra como o método reduce funciona, deixarei abaixo do 
    vídeo de correção dos exercícios um link para a aula de introdução ao 
    reduce e um link para a documentação do método no MDN.
*/

const reduce = (array, func, initialValue) => {
  let acc = initialValue;

  array.forEach((item) => {
    acc = func(acc, item);
  });

  return acc;
};

console.log(reduce([1, 2, 3], (acc, item) => acc + item, 0));

const inReduce = (array, callback, initialValue) => {
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  const startingIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startingIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
};

console.log(inReduce([10, 20, 30], (acc, item) => acc + item, 0));
