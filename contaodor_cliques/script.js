var numClick = Number(localStorage.getItem('numClickSalvo')) || 0;
var btnClick = document.getElementById('botaoClick');
var quantClick = document.getElementById('quantClick');
var msgGame = document.getElementsByClassName('main-msg')[0];
var btnReset = document.getElementById('botaoReset');

btnClick.addEventListener('click', contarCLick);
btnReset.addEventListener('click', reset);

quantClick.innerHTML = `Cliques: ${numClick}`;

function contarCLick() {
    numClick++
    localStorage.setItem('numClickSalvo', numClick);

    if (numClick == 10) {
        msgGame.style.display = 'block'
    }

    quantClick.innerHTML = `Cliques: ${numClick}`

}

function reset() {
    numClick = 0
    quantClick.innerHTML = `Cliques: ${numClick}`
    msgGame.style.display = 'none'
}