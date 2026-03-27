var frases = document.getElementById("frase");
var btnAlterarFrase = document.getElementById("botaoFrase")
var frasesAleatorias = [
    "Não desista.",
    "O sucesso vem da disciplina.",
    "Pequenos passos todos os dias."
];

btnAlterarFrase.addEventListener("click", alterarFrase);
 
function alterarFrase(){
    var numero = Math.floor(Math.random() * 3)
    var fraseEscolida = frasesAleatorias[numero]

    frases.innerHTML = fraseEscolida
};
