function jogar(){
    escolhajogador = prompt("Digite 1- pedra, 2- papel ou 3- tesora")
    escolhacomputador = Math.floor(Math.random() * 3) + 1;

    if(escolhajogador == escolhacomputador) {
        alert("Deu empate!!")
    }

    alert("A escolha do computador foi " + escolhacomputador)

    if(escolhajogador == 1){
        if(escolhacomputador == 2){
            alert("Computador venceu, jogou papel")
        }
        if(escolhacomputador == 3){
            alert("Jogador venceu!!")
        }
    }

    if(escolhajogador == 2){
        if(escolhacomputador == 3){
            alert("Computador venceu, jogou tesoura")
        }
        if(escolhacomputador == 1){
            alert("Jogador venceu!!")
        }
    }

    if(escolhajogador == 3){
        if(escolhacomputador == 1){
            alert("Computador venceu, jogou pedra")
        }
        if(escolhacomputador == 2){
            alert("Jogador venceu!!")
        }
    }
}