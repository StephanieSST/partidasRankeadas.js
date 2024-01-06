
do {
    quantidadeVitorias(Number(prompt("Qual a quantidade de vitórias? ")), Number(prompt("Qual a quantidade de derrotas? ")))
}

while (novamente == "S" || novamente == "s")

function quantidadeVitorias(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = ""

    if (saldoVitorias < 10) {
        nivel = "Ferro"
    }
    else if (saldoVitorias <= 20) {
        nivel = "Bronze"
    }
    else if (saldoVitorias <= 50) {
        nivel = "Prata"
    }
    else if (saldoVitorias <= 80) {
        nivel = "Ouro"
    }
    else if (saldoVitorias <= 90) {
        nivel = "Diamante"
    }
    else if (saldoVitorias <= 100) {
        nivel = "Lendário"
    }
    else if (saldoVitorias > 100) {
        nivel = "Imortal"
    }
    else /*if (isNaN(nivel))*/ {
        nivel = "Erro!"
        novamente = prompt("Valor inválido! Deseja tentar novamente?(S/N): ")

        // if (novamente == "S" || novamente == "s") {
            
        //     quantidadeVitorias(Number(prompt("Qual a quantidade de vitórias? ")), Number(prompt("Qual a quantidade de derrotas? ")))
        // }
    }
    // else {
    //     alert("Inválido!")
    // }
    if (nivel != "Erro!") {
        alert(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`)
        novamente = prompt("Deseja fazer outra operação?(S/N): ")
    }

}



