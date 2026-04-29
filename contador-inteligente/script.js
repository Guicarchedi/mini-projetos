var contador = 0;
var display = document.getElementById("displayConteudo");
var mensagem = document.getElementById("displayMensagem");
var btnAdd = document.getElementById("adicionar");
var btnReset = document.getElementById("resetar");
var btnDiminuir = document.getElementById("diminuir");

btnAdd.addEventListener("click", adicionar);
btnReset.addEventListener("click", resetar);
btnDiminuir.addEventListener("click", diminuir);

if (contador == 0) {
    display.style.color = "red";
}

function adicionar(){
    contador++;
    display.innerHTML = contador;

    if (contador > 10){
        contador = 10;
        display.innerHTML = contador;
        mensagem.innerHTML = "Você chegou ao limite!";
    }

    if (contador == 0) {
        display.style.color = "red";
    } else {
        display.style.color = "green";
    }
}
function resetar(){
    contador = 0;
    display.innerHTML = contador;
    mensagem.innerHTML = "";

    if (contador == 0) {
        display.style.color = "red";
    } else {
        display.style.color = "green";
    }
}

function diminuir(){
    contador--;
    display.innerHTML = contador;

    if(contador < 0){
        contador = 0;
        display.innerHTML = contador;
    }

    if (contador == 0) {
        display.style.color = "red";
    } else {
        display.style.color = "green";
    }
}