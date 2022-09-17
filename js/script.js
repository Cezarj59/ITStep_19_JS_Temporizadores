const caixa1 = document.getElementById('caixa-1');
const caixa2 = document.getElementById('caixa-2');
const caixa3 = document.getElementById('caixa-3');
const caixa4 = document.getElementById('caixa-4');

let contador = Number(window.prompt("Digite um Numero entre 10 e 100.")) + 1;

let tempo = 1000;

function avancar() {

    tempo -= 100;
    console.log(tempo);
    return tempo
}

if (isNaN(contador)) {
    alert("Apenas numero")
} else {
    setTimeout(() => {
        setInterval(() => {
            if (contador > 0) {
                if (caixa1.style.backgroundColor == "white") {
                    caixa1.style = "background-color: #F7C20B;"
                } else if (caixa2.style.backgroundColor == "white") {
                    caixa2.style = "background-color: #F59A00;"
                } else if (caixa3.style.backgroundColor == "white") {
                    caixa3.style = "background-color: #EC8723;"
                } else if (caixa4.style.backgroundColor == "white") {
                    caixa4.style = "background-color: #DC621A;"
                } else {
                    caixa1.style.backgroundColor = "white";
                    caixa2.style.backgroundColor = "white";
                    caixa3.style.backgroundColor = "white";
                    caixa4.style.backgroundColor = "white";
                }

                if (contador > 0) {
                    contador--;
                    document.getElementById("contador").innerHTML = contador;
                }
            }
        }, tempo);
    }, tempo);
}










