function rdif(parametro){
    if (parametro != 1 && parametro != 2) {
        return true;
    } else {
        return false;
    }
}

function invalidado(parametro) {
    if (rdif(parametro)) {
        alert("Resposta inválida")
    }
}

while (rdif(carreira)) {
    var carreira = prompt("Digite o o número da área que deseja seguir. (1)Front-End (2)Back-End")
    if (carreira == 1) {
        while (carreiraFront != 1 && carreiraFront != 2) {
            var carreiraFront = prompt("O que quer aprender? (1)React (2)Vue")
            invalidado(carreiraFront)
        }    
    } else if (carreira == 2) {
        while (carreiraBack != 1 && carreiraBack != 2) {
            var carreiraBack = prompt("O que quer aprender? (1)C# (2)Java")
            invalidado(carreiraBack)
        }
    } else {
        alert("Resposta inválida")
    }
}

let carreira2 = 0
while (rdif(carreira2)) {
    carreira2 = prompt(`Escolha uma das opções:
    (1) Gostaria de seguir se especializando na área escolhida.
    (2) Gostaria de seguir se desenvolvendo para se tornar Fullstack?`)
    if (carreira2 == 1) {
        alert("Boa! Vai ser um especialista de sucesso!")
    } else if (carreira2 == 2) {
        alert("Boa! Será Fullstack de sucesso")
    }
    invalidado(carreira2)
}

let carreira3 = "s"
while (carreira3 == "s") {
    carreira3 = prompt(`Tem mais alguma tecnologia que gostaria de aprender? Responda com s (para sim) ou n (para não)`)
    if (carreira3 == "s") {
        linguagem = prompt("Qual?")
        alert(`${linguagem} é delicinha!`)
    }
}