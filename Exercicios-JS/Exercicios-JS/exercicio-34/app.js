/*
  01

  - Implemente uma função que recebe uma string por parâmetro e retorna a 
    string invertida;
    
    Exemplos: 
      - Se '123' é recebido por parâmetro, '321' deve ser retornado;
      - Se 'abc' é recebido por parâmetro, 'cba' deve ser retornado;
    
  - Após implementar a função, implemente outra versão da função. Essa 2ª 
    versão deve fazer o mesmo que a função anterior faz, mas de forma diferente.
*/

const getReversedString = (string) => string.split("").reverse().join("");

const reverseString = (string) =>
  string.split("").reduce((acc, letter) => letter + acc, "");

console.log(getReversedString("123"));
console.log(reverseString("abc"));
/*
1ª - '1' + ''  => '1'
2ª - '2' + '1'  => '21'
3ª - '3' + '21'  => '321'
 */

/*
  02
  
  - Descubra o que o código abaixo está fazendo e refatore-o.
*/

const numbers = [5, 20, 7, 32, 47, 15, 83, 91, 27, 33];

const foundNumber = numbers.includes(15);

// let foundNumber = false;

// numbers.forEach((number) => {
//   if (number === 15) {
//     foundNumber = true;
//   }

// });

console.log(foundNumber);

/*
 resposta O código acima está percorrendo um array de números utilizando o método.forEach() e verificando se há algum número igual a 15, definindo a variável foundNumber como true caso encontre. Em seguida, ele exibe no console o valor de foundNumber.

Podemos refatorar este código para torná-lo mais legível e eficiente, utilizando o método .includes() para verificar se o número 15 está presente no array numbers
 */


/*
  03

  - Refatore o código da Weather Application implementado na última aula;
  - Dicas do que pode ser refatorado:
    - Substituir o if/else por um código mais elegante =D
    - Isolar a manipulação do DOM em pequenas funções de responsabilidade única.
*/
