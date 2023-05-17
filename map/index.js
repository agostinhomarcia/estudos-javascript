const numbers = [1, 2, 3];

const doubleNumbers = numbers.map((number) => {
  return number * 2;
});

// console.log("number", doubleNumbers);

const prices = [10, 30, 60, 90, 120];

const salePrices = prices.map((price) => price / 2);
// console.log(prices, "desconto", salePrices);

// retorne um array onde os produtos igual ou acima de 30 reais, custem a metade do preço
const products = [
  { name: "Mouse sem Fio", price: 30 },
  { name: "Pen drive", price: 25 },
  { name: "Cartucho de Tinta", price: 50 },
  { name: "Suporte Ergonômico para Notebook", price: 23 },
  { name: "Repetidor de sinal Wi-Fi", price: 44 },
];

const saleProducts = products.map((product) => {
  if (product.price >= 30) {
    return {
      name: product.name,
      price: product.price / 2,
    };
  }
  return product;
});

console.log(saleProducts);
