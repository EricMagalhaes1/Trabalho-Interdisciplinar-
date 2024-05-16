// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
let json = `{
    "recorrentes": [
        {
        "nome": "Acordar",
        "inicio": "05:00",
        "fim": "05:00",
        "diasDaSemana": [0, 1, 2, 3, 4]
        },
        {
        "nome": "Faculdade",
        "inicio": "07:00",
        "fim": "12:20",
        "diasDaSemana": [0, 1, 2, 3, 4]
        },
        {
        "nome": "Acordar",
        "inicio": "09:00",
        "fim": "09:00",
        "diasDaSemana": [5, 6]
        }
    ]
}`;

let rotina = JSON.parse(json);

let lista = document.getElementById("lista");
let input = document.getElementById("data");

function mostrarLista(data) {
	lista.innerHTML = "";

	for (let i = 0; i < rotina.recorrentes.length; i++) {
		let tarefa = rotina.recorrentes[i];

		if (tarefa.diasDaSemana.indexOf(data.getDay()) !== -1) {

			let li = document.createElement("li");
			if (tarefa.inicio === tarefa.fim)
				li.innerText = `${tarefa.inicio}: ${tarefa.nome}`;
			else
				li.innerText = `${tarefa.inicio} - ${tarefa.fim}: ${tarefa.nome}`;

			lista.appendChild(li);
		}
	}
}

input.addEventListener("change", () => {
	mostrarLista(new Date(input.value));
});

mostrarLista(new Date());
