const form = document.querySelector(".signup-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event.target.username.value);
});
