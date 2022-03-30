let add = 'SIM';
let congelados = [];
let frutas = [];
let laticínios = [];
let doces = [];
let categorias = [congelados, frutas, laticínios, doces]
let listaDeCompras = [];

while (add == "SIM") {
    add = prompt("Voce deseja adicionar uma comida na sua lista de compras? Responda com 'SIM' ou 'Não'").toUpperCase();
    if (add == "NÃO") {break}
    let novaCompra = prompt("Qual Comida deseja inserir?");
    let categoria = prompt(`Qual categoria essa comida se enquadra? Digite n. correspondente:
(0) Congelados
(1) Frutas
(2) Laticínios
(3) Doces`);
    indice = Number(categoria);
    console.log(indice)
    if (indice > 0 && indice < 5) {
        categorias[indice].push(novaCompra);
        console.log(categorias[indice]);
    } else {
        alert("Categoria inválida");
    }
}

alert(`Lista de compras:
Congelados: ${congelados}
Frutas: ${frutas}
Laticínios: ${laticínios}
Doces: ${doces}`)