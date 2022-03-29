var choice = Math.floor(Math.random() * 11);
let number = document.querySelector('#number')
let result = document.querySelector('h1')
let btn = document.querySelector('button')
let erros = 3;

btn.addEventListener("click", function showResult () {
  if (number.value > 10 || number.value < 0) {
    alert("Digite um número válido!")
  } else if (number.value == choice) {
      result.textContent = `Parabéns, você acertou! O número era ${choice}`;
    } else if (erros === 0) {
      result.textContent = `Você perdeu! O número era ${choice}`
      } else {
        alert(`Errou! Você tem mais ${erros} chance(s)`)
        erros--;
        }
})

