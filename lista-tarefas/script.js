var tarefaInput = document.getElementById("tarefa-input");
var btnAdicionar = document.getElementById("adicionar");
var listaTarefas = document.getElementById("tarefas-lista");


btnAdicionar.addEventListener("click", adicionarTarefa);
listaTarefas.addEventListener("click", function(event) {
    if (event.target.classList.contains("excluir")) {
        excluirTarefa(event);
        return;
    }

    //marcar/desmarcar tarefa concluída ao clicar no texto ou no <li>
    var li = event.target.closest("li");
    if (li && listaTarefas.contains(li)) {
        li.classList.toggle("concluida");
    }
});

function adicionarTarefa() {
    var tarefa = tarefaInput.value.trim();
    var novaTarefa = document.createElement("li");

    novaTarefa.innerHTML = tarefa + '<button class="excluir">Excluir</button>';
    listaTarefas.appendChild(novaTarefa);   
    tarefaInput.value = "";
}

function excluirTarefa(event) {
    var botao = event.target;
    var tarefa = botao.parentElement;
    tarefa.remove();
}

function tarefaConcluida() {
    var tarefa = event.target;
    tarefa.style.textDecoration = "line-through";
}