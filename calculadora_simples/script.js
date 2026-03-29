var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');
var displayConteudo = document.getElementById('displayConteudo');
var btnSomar = document.getElementById("somar")
var btnSubtrair = document.getElementById("subtrair")
var btnMultiplicar = document.getElementById("multiplicar")
var btnDividir = document.getElementById("dividir")

btnSomar.addEventListener("click", somar);
btnSubtrair.addEventListener("click", subtrair);
btnMultiplicar.addEventListener("click", multiplicar);
btnDividir.addEventListener("click", dividir);

function somar() {
    var resultado = parseFloat(numero1.value) + parseFloat(numero2.value);
    displayConteudo.textContent = `Resultado: ${resultado}`;
}

function subtrair(){
    var resultado = parseFloat(numero1.value) - parseFloat(numero2.value);
    displayConteudo.textContent = `Resultado: ${resultado}`;
}

function multiplicar(){
    var resultado = parseFloat(numero1.value) * parseFloat(numero2.value);
    displayConteudo.textContent = `Resultado: ${resultado}`;
}

function dividir(){
    var resultado = parseFloat(numero1.value) / parseFloat(numero2.value);
    displayConteudo.textContent = `Resultado: ${resultado}`;
}
