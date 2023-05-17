/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/
const inputUsername = document.querySelector("#username");
const form = document.querySelector("form");
const button = document.querySelector("button");

const usernameRegex = /^[a-zA-Z]{6,}$/;

const paragraphUsernamefeedback = document.createElement("p");
const paragraphSubmitFeedback = document.createElement("p");

paragraphSubmitFeedback.setAttribute("data-feedback", "submit-feedback");

inputUsername.addEventListener("input", (event) => {
  const inputValue = event.target.value;

  const paragraphSubmitFeedbackExists = document.querySelector(
    '[data-feedback="submit-feedback"]'
  );

  if (paragraphSubmitFeedbackExists) {
    paragraphSubmitFeedback.remove();
  }

  if (!usernameRegex.test(inputValue)) {
    paragraphUsernamefeedback.textContent =
      "O valor deveconter no mínimo 6 caracteres,  com apenas letras maiúsculas e/ou minúsculas";
    paragraphUsernamefeedback.setAttribute("class", "username-help-feedback");
    event.target.insertAdjacentElement("afterend", paragraphUsernamefeedback);
    return;
  }
  paragraphUsernamefeedback.textContent = "Username válido =)";
  paragraphUsernamefeedback.setAttribute("class", "username-success-feedback");
  event.target.insertAdjacentElement("afterend", paragraphUsernamefeedback);
});

//exercicio 2

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = inputUsername.value;
  if (!usernameRegex.test(inputValue)) {
    paragraphSubmitFeedback.textContent =
      "Por favor, insira um username válido";
    paragraphSubmitFeedback.setAttribute = ("class", "submit-help-feedback");
    button.insertAdjacentElement("afterend", paragraphSubmitFeedback);
    return;
  }
  paragraphSubmitFeedback.textContent = "Dados enviados🤗";
  paragraphSubmitFeedback.setAttribute("class", "submit-success-feedback");
  button.insertAdjacentElement("afterend", paragraphSubmitFeedback);
});
/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
*/
const some = (array, func) => {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      return true;
    }
  }
};
console.log([1, 2, 3], (item) => item === 2);
