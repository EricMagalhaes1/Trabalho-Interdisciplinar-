document.addEventListener("DOMContentLoaded", function () {
  const tarefas = {
    tarefas: [
      { Nome: "Finalizar relatório", data: "2024-06-29", status: "Atrasada" },
      { Nome: "Aula AEDS 2", data: "2024-06-28", status: "Concluida" },
      { Nome: "Aula TI02", data: "2024-06-29", status: "Atrasada" },
      { Nome: "Aula DEW", data: "2024-07-01", status: "Pendente" },
      { Nome: "Aula TI01", data: "2024-06-30", status: "Pendente" },
      { Nome: "Finalizar relatório", data: "2024-06-28", status: "Pendente" },
      {
        Nome: "Reunião com o cliente",
        data: "2024-07-02",
        status: "Concluida",
      },
      { Nome: "Revisar código", data: "2024-06-29", status: "Atrasada" },
      { Nome: "Enviar faturas", data: "2024-06-27", status: "Pendente" },
      {
        Nome: "Planejamento do projeto",
        data: "2024-06-26",
        status: "Concluida",
      },
    ],
  };

  function contarTarefasPorStatus(tarefas) {
    const contagem = { Concluida: 0, Pendente: 0, Atrasada: 0 };

    tarefas.tarefas.forEach((tarefa) => {
      if (tarefa.status in contagem) {
        contagem[tarefa.status]++;
      }
    });

    return contagem;
  }

  const contagemStatus = contarTarefasPorStatus(tarefas);

  const diasDaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const contagemTarefas = Array(7).fill(0);

  function getDiaDaSemana(dataString) {
    const data = new Date(dataString);
    return data.getDay();
  }

  tarefas.tarefas.forEach((tarefa) => {
    const diaDaSemana = getDiaDaSemana(tarefa.data);
    contagemTarefas[diaDaSemana]++;
  });

  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: diasDaSemana,
      datasets: [
        {
          data: contagemTarefas,
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: "bottom",
        },
        title: {
          display: true,
          text: "Tarefas da Semana",
        },
        tooltip: {
          enabled: true,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  var ctx2 = document.getElementById("myPieChart").getContext("2d");
  var myPieChart = new Chart(ctx2, {
    type: "pie",
    data: {
      labels: ["Tarefas Concluídas", "Tarefas à Fazer", "Tarefas Atrasadas"],
      datasets: [
        {
          data: [
            contagemStatus.Concluida,
            contagemStatus.Pendente,
            contagemStatus.Atrasada,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Grafico de Desempenho",
        },
        tooltip: {
          enabled: true,
        },
      },
    },
  });

  const lista = document.getElementById("lista");
  const hoje = new Date().toISOString().split("T")[0];

  function mostrarTarefasDoDia(tarefas, dataAtual) {
    lista.innerHTML = "";
    const tarefasDoDia = tarefas.tarefas.filter(
      (tarefa) => tarefa.data === dataAtual
    );

    tarefasDoDia.forEach((tarefa) => {
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerText = `${tarefa.Nome} - Status: ${tarefa.status}`;
      lista.appendChild(li);
    });

    if (tarefasDoDia.length === 0) {
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerText = "Nenhuma tarefa para hoje.";
      lista.appendChild(li);
    }
  }

  mostrarTarefasDoDia(tarefas, hoje);

  const link = document.getElementById("hrefsono");
  link.addEventListener("click", function (event) {
    event.preventDefault();
    handleNavigation(link.id);
  });

  function handleNavigation(linkId) {
    const firstAccessKey = `firstAccess_${linkId}`;
    const isFirstAccess = !localStorage.getItem(firstAccessKey);
    const firstAccessPage = {
      hrefsono: "../Gerenciar_sono/index.html",
    };
    const subsequentAccessPage = {
      hrefsono: "../Gerenciar_sono/index3.html",
    };

    if (isFirstAccess) {
      localStorage.setItem(firstAccessKey, "true");
      window.location.href = firstAccessPage[linkId];
    } else {
      window.location.href = subsequentAccessPage[linkId];
    }
  }
});
