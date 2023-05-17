/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/
function multiply(firstNumber = 0, seccondNumber = 0) {
  return firstNumber * seccondNumber;
}

// console.log(multiply(2, 3));

/*
  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/
// const division = function (firstNumber = 0, seccondNumber = 0) {
//   return firstNumber / seccondNumber;
// };
// console.log(division(4, 2));
/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/
// const log = function (valeu = olá) {
//   console.log(valeu);
// };
// for (let i = 0; i < 7; i++) {
//   let counter = i + 1;
//   log(`Esta é a ${counter}ª vez que essa string é exibida`);
// }
/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = [
  "lol",
  "yolo",
  "troll",
  "stalkear",
  "selfie",
  "influencer",
  "crush",
  "fitness",
  "hater",
  "bae",
  "random",
  "kawaii",
  "outfit",
  "mood",
  "fail",
];
const transformToUpperCase = function (array = []) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].toUpperCase());
  }
  return newArray;
};
// console.log(transformToUpperCase(millennialWords));
/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3];
const randomNumbersTwo = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3];

// let positiveNumberCounter = 0;
// let negativeNumberCounter = 0;

const isPositive = function (number = 0) {
  return number >= 1;
};

const getPositiveOrNegativeNumber = function (array = []) {
  let positiveNumberCounter = 0;
  let negativeNumberCounter = 0;
  for (let i = 0; i < array.length; i++) {
    const isPositiveNumber = isPositive(array[i]);
    if (isPositiveNumber) {
      positiveNumberCounter++;
    } else {
      negativeNumberCounter++;
    }
  }
  // console.log(positiveNumberCounter, negativeNumberCounter);
  return {
    positiveNumberCounter,
    negativeNumberCounter: negativeNumberCounter,
  };
};
const numbers = getPositiveOrNegativeNumber(randomNumbers);
console.log(numbers.positiveNumberCounter);
const { negativeNumberCounter, positiveNumberCounter } =
  getPositiveOrNegativeNumber(randomNumbers);
console.log(numbers);

console.log(getPositiveOrNegativeNumber(randomNumbers));
console.log(getPositiveOrNegativeNumber(randomNumbersTwo));
// console.log(positiveNumberCounter, negativeNumberCounter);

// console.log(
//   `O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${positiveNumberCounter} positivos e ${negativeNumberCounter} negativos`
// );

const oddNumbers = function (numbers = []) {
  let newArray = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 1) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
};
console.log(oddNumbers(randomNumbers));

const sum = function (number) {
  return number + 5;
};

const result = sum(5);

const showResult = function (valeu) {
  return `o valor é: ${valeu}`;
};
console.log(showResult(result));

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () {
    return "Plymouth";
  },
  function () {
    return "é";
  },
  function () {
    return "uma";
  },
  function () {
    return "cidade";
  },
  function () {
    return "fantasma";
  },
  function () {
    return "localizada";
  },
  function () {
    return "na";
  },
  function () {
    return "ilha";
  },
  function () {
    return "de";
  },
  function () {
    return "Montserrat,";
  },
  function () {
    return "um";
  },
  function () {
    return "território";
  },
  function () {
    return "ultramarino";
  },
  function () {
    return "do";
  },
  function () {
    return "Reino";
  },
  function () {
    return "Unido";
  },
  function () {
    return "localizado";
  },
  function () {
    return "na";
  },
  function () {
    return "cadeia";
  },
  function () {
    return "de";
  },
  function () {
    return "Ilhas";
  },
  function () {
    return "de";
  },
  function () {
    return "Sotavento";
  },
  function () {
    return "nas";
  },
  function () {
    return "Pequenas";
  },
  function () {
    return "Antilhas,";
  },
  function () {
    return "Índias";
  },
  function () {
    return "Ocidentais.";
  },
];

let newSentence = "";
for (let i = 0; i < functions.length; i++) {
  newSentence += `${functions[i]()} `;
}

console.log(newSentence);
