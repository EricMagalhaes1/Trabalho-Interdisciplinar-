document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("users.json")
      .then((response) => response.json())
      .then((users) => {
        const user = users.find(
          (user) => user.login === username && user.senha === password
        );
        if (user) {
          alert("Login realizado com sucesso!");
          // Aqui você pode redirecionar o usuário para outra página
        } else {
          document.getElementById("error-message").textContent =
            "Usuário ou senha incorretos.";
        }
      })
      .catch((error) => console.error("Erro ao carregar usuários:", error));
  });
