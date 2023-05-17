// class Student {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

function Student(name, email) {
  this.name = name;
  this.email = email;
}

Student.prototype.login = function () {
  return `${this.name} fez login`;
};

Student.prototype.comment = function () {
  return `${this.name} comentou`;
};

const gabrielFialho = new Student("Gabriel Fialho", "gabriel@gmail.com");
const brenoLemos = new Student("breno Lemos", "breno@gmail.com");

console.log(gabrielFialho.comment(), brenoLemos.comment());
console.log(gabrielFialho.comment === brenoLemos.comment);
