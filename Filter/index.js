// create a new array with premium users

const users = [
  { name: "Marcia Agostinho", premium: true },
  { name: "John ", premium: false },
  { name: "Pedro", premium: false },
  { name: "Linus", premium: true },
  { name: "Margaret", premium: true },
];

const premiumUsers = users.filter((user) => user.premium);
console.log(premiumUsers);

// create a new array with active members
const partner = [
  { name: "John", active: true },
  { name: "Pedro", active: false },
  { name: "Linus", active: false },
  { name: "Brenda", active: true },
  { name: "Julia", active: false },
];

const activePartner = partner.filter((partner) => partner.active);

console.log(activePartner);
