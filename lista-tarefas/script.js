const btnAdd = document.getElementById('addTarefa');
const inputTarefa = document.getElementById('nomeTarefa');
const listaTarefas = document.getElementById('listaTarefas');

function criarTarefa(texto) {
    const tarefa = document.createElement('li');
    tarefa.className = 'tarefa';
    tarefa.innerHTML = `${texto.trim()} <button class="excluir">🗑️</button>`;

    const btnExcluir = tarefa.querySelector('.excluir');
    btnExcluir.addEventListener('click', () => {
        tarefa.remove();
    });

    return tarefa;
}

function adicionarTarefa() {
    const texto = inputTarefa.value;
    if (!texto.trim()) {
        inputTarefa.focus();
        return;
    }

    const tarefa = criarTarefa(texto);
    listaTarefas.appendChild(tarefa);
    inputTarefa.value = '';
    inputTarefa.focus();
}

btnAdd.addEventListener('click', adicionarTarefa);
inputTarefa.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});
