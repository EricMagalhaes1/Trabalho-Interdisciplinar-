// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
let json = `{
    "recorrentes": [
        {
        "nome": "Acordar",
        "inicio": "05:00",
        "fim": "05:00",
        "diasDaSemana": [1, 2, 3, 4, 5]
        },
        {
        "nome": "Faculdade",
        "inicio": "07:00",
        "fim": "12:20",
        "diasDaSemana": [1, 2, 3, 4, 5]
        },
        {
        "nome": "Acordar",
        "inicio": "09:00",
        "fim": "09:00",
        "diasDaSemana": [0, 6]
        }
    ],
    "calendario": [
        {
        "nome": "Entrega sprint 2",
        "inicio": "23:59",
        "fim": "23:59",
        "data": "2024-05-19"
        },
        {
        "nome": "Aniversário",
        "inicio": "13:00",
        "fim": "16:00",
        "data": "2024-05-23"
        }
    ]
}`;

let rotina = JSON.parse(json);

let lista = document.getElementById("lista");
let input = document.getElementById("data");
let titulo = document.getElementById("titulo");

// cria uma data apartir de uma string "dd-mm-yyyy" no fuso horário local
function stringParaDate(s) {
    let b = s.split(/\D/);
    return new Date(b[0], b[1]-1, b[2], 0, 0, 0);
}

function mesmaData(data1, data2) {
    return Math.abs(data1.getTime() - data2.getTime()) < 86400000;
}

function mostrarLista(data) {
    lista.innerHTML = "";
    let tarefas = [];

    for (let i = 0; i < rotina.recorrentes.length; i++) {
        let tarefa = rotina.recorrentes[i];

        if (tarefa.diasDaSemana.indexOf(data.getDay()) !== -1) {
            tarefas.push(tarefa);
        }
    }

    for (let i = 0; i < rotina.calendario.length; i++) {
        let tarefa = rotina.calendario[i];
        let tarefaData = stringParaDate(tarefa.data);

        if (mesmaData(tarefaData, data))
            tarefas.push(tarefa);

    }

    tarefas.sort((a, b) => {
        a.inicio > b.inicio;
    });

    for (let i = 0; i < tarefas.length; i++) {
        let tarefa = tarefas[i];
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        if (tarefa.inicio === tarefa.fim)
            li.innerText = `${tarefa.inicio}: ${tarefa.nome}`;
        else
            li.innerText = `${tarefa.inicio} - ${tarefa.fim}: ${tarefa.nome}`;

        lista.appendChild(li);
    }

    let h = new Date();

    if (mesmaData(h, data))
        titulo.innerText = "Tarefas de hoje";
    else
        titulo.innerText = "Tarefas de " + data.toLocaleDateString();
}

document.getElementById("aplicar-data").addEventListener('click', () => {
    mostrarLista(stringParaDate(data.value));
});

mostrarLista(new Date());
