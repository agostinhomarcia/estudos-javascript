// const user = {
//   name: "Marcia",
//   email: "marcia@gmail.com",
//   login: () => "O usuário logou",
//   logout: () => "O usuário deslogou",
// };

// const user2 = {
//   ...user,
//   name: "Marciana",
//   email: "marciana@gmail.com",
// };

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.points = 0;
  }
  login() {
    return `${this.name} logou na aplicação`;
  }
  logout() {
    return `${this.name} deslogou da aplicação`;
  }
  addPoint() {
    this.points++;
    return `${this.name} agora tem ${this.points > 1 ? "pontos" : "ponto"}`;
  }
}

const user = new User("Marcia", "marcia@123");
const user2 = new User("Jonas", "jonas@456");
user.login();
user.logout();

console.log(user);
