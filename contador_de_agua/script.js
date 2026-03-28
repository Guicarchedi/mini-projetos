var contador = 1;
var totalAgua = contador * 250;
var textoC = document.getElementById("textoContagem");
var mensagemC = document.getElementById("mensagemContador")
var btnBebiAgua = document.getElementById("bebiAgua");
var btnResetar = document.getElementById("resetar");
var progresso = document.getElementById("progresso");
var copos = document.querySelectorAll(".copo")

btnBebiAgua.addEventListener("click", bebiAgua);
btnResetar.addEventListener("click", resetar);

function atualizarCopos(){
    copos.forEach(function(copo) {
        copo.classList.remove("ativo");
    });
    if (contador < copos.length) {
        copos[contador].classList.add("ativo");
    }
}

function bebiAgua() {
    var totalAgua = contador * 250;

    contador++;
    textoC.innerHTML = `Você bebeu: ${contador} copos de agua`;
    progresso.innerHTML = `Progresso: ${totalAgua}ml de água`;  
    atualizarCopos()

    if (contador == 8) {
        mensagemC.innerHTML = "Bom, você já tomou o minimo recomendado."
    } 
    else if (contador == 10) {
        mensagemC.innerHTML = "Otimo, você tomou 10 copos de água."
    } 
    else if (contador == 12) {
        mensagemC.innerHTML = "Exelente, você tomou 12 copos."
    } 
    else if (contador >= 13) {
        mensagemC.innerHTML = "Cuidado com o excesso de água"
    }

    if (contador <= 4){
        textoC.style.color = "red"
    } 
    else if (contador <= 8) {
        textoC.style.color = "orange"
    } 
    else if (contador <= 12){
        textoC.style.color = "green"
    } else {
        textoC.style.color = "red"
    }
};

function resetar() {
    contador = 0
    textoC.innerHTML = "Você bebeu: 0 copos de água"
    mensagemC.innerHTML = ""
    textoC.style.color = "black"
    
}
