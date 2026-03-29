var tarefaInput = document.getElementById("tarefa-input");
var btnAdicionar = document.getElementById("adicionar");
var listaTarefas = document.getElementById("tarefas-lista");
var btnExcluir = document.getElementsByClassName("excluir");


btnAdicionar.addEventListener("click", adicionarTarefa);
btnExcluir.addEventListener("click", excluirTarefa);

function adicionarTarefa() {
    var tarefa = tarefaInput.value.trim();
    var novaTarefa = document.createElement("li");

    novaTarefa.innerHTML = tarefa + '<button class="excluir">Excluir</button>';
    listaTarefas.appendChild(novaTarefa);
    
}

function excluirTarefa() {
    var tarefa = this.parentNode;
    listaTarefas.removeChild(tarefa);

}