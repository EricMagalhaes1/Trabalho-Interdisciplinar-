document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        const users = data.users;
        const user = users.find(
          (user) => user.login === username && user.senha === password
        );
        if (user) {
          alert("Login realizado com sucesso!");
          window.location.href = "../Home/home.html"; // Redireciona para a página home.html
        } else {
          document.getElementById("error-message").textContent =
            "Usuário ou senha incorretos.";
        }
      })
      .catch((error) => console.error("Erro ao carregar dados:", error));
  });
