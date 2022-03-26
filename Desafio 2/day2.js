
let name1 = prompt("Qual é o seu nome?")
let age = prompt("Qual é a sua idade?")
let city = prompt("Qual a sua cidade?")
let language = prompt("Qual linguagem de programação você está estudando?")

let apresent = document.querySelector(".apresentacao")
let apresent2 = document.querySelector(".apresentacao2")
apresent.textContent = `Olá ${name1}, você tem ${age} anos, mora em ${city} e está estudando ${language}`

let n1 = prompt(`Você gosta de estudar ${language}? Responda com o número 1 para SIM ou 2 para NÃO`)

if (n1 == 1) {
    apresent2.textContent = "Que bom que está gostando! Continue estudando e você terá muito sucesso."
} else if (n1 == 2) {
    apresent2.textContent = "Talvez essa não seja a linguagem para você. Já tentou aprender outras?"
} else {
    alert("INVÁLIDO")
}