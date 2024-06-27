document.addEventListener("DOMContentLoaded", function () {
  const tarefas = {
    tarefas: [
      {
        Nome: "Finalizar relatório",
        data: "2024-05-20",
        status: "Atrasada",
      },
      {
        Nome: "Aula AEDS 2",
        data: "2024-05-20",
        status: "Concluida",
      },
      {
        Nome: "Aula TI02",
        data: "2024-05-20",
        status: "Atrasada",
      },
      {
        Nome: "Aula DEW",
        data: "2024-06-08",
        status: "Pendente",
      },
      {
        Nome: "Aula TI01",
        data: "2024-05-20",
        status: "Pendente",
      },
      {
        Nome: "Finalizar relatório",
        data: "2024-05-20",
        status: "Pendente",
      },
      {
        Nome: "Reunião com o cliente",
        data: "2024-05-21",
        status: "Concluida",
      },
      {
        Nome: "Revisar código",
        data: "2024-05-22",
        status: "Atrasada",
      },
      {
        Nome: "Enviar faturas",
        data: "2024-05-23",
        status: "Pendente",
      },
      {
        Nome: "Planejamento do projeto",
        data: "2024-05-24",
        status: "Concluida",
      },
    ],
  };
  function contarTarefasPorStatus(tarefas) {
    const contagem = {
      Concluida: 0,
      Pendente: 0,
      Atrasada: 0,
    };

    tarefas.tarefas.forEach((tarefa) => {
      if (tarefa.status in contagem) {
        contagem[tarefa.status]++;
      }
    });

    return contagem;
  }

  const contagemStatus = contarTarefasPorStatus(tarefas);

  document.getElementById("concluidas").textContent = contagemStatus.Concluida;
  document.getElementById("aFazer").textContent = contagemStatus.Pendente;
  document.getElementById("atrasadas").textContent = contagemStatus.Atrasada;

  const diasDaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
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
          text: "Desempenho",
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
      labels: ["Tarefas Concluidas", "Tarefas à fazer", "Tarefas Atrasadas"],
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
          text: "Mapa de Conclusao de Tarefas",
        },
        tooltip: {
          enabled: true,
        },
      },
    },
  });
});
