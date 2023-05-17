const randomNumbers = [36, 99, 37, 55, 89, 63, 12];

const numbersGreaterThan37 = randomNumbers.filter((number) => number > 37);

console.log(numbersGreaterThan37);

const users = [
  { name: "Ada Lovelace", premium: true },
  { name: "Grace Hopper", premium: false },
  { name: "Alan Turing", premium: true },
  { name: "Linus Torvalds", premium: false },
  { name: "Margaret Hamilton", premium: true },
];
const premiumUsers = users.filter((user) => user.premium);

console.log(premiumUsers);
