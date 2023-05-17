let user = {
  name: "márcia",
  age: 36,
  email: "marciaagostinho@gmail.com",
  city: "sbs",
  blogPosts: [" programação", "estudos"],
  login: function () {
    console.log("usuário logado");
  },
  logout: function () {
    "usuario deslogadoi";
  },
  logBlogPosts: function () {
    console.log(`${this.name} escreveu os seguintes posts`);

    this.blogPosts.forEach((post) => {
      console.log(post);
    });
  },
};
user.logBlogPosts();
