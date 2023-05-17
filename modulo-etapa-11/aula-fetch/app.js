const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};
console.log(getUsers());

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     console.log("Response", response);
//     response.json();
//   })
//   .then((users) => console.log(users))
//   .catch((error) => console.log(error));
