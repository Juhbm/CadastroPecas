const listaPecas = ["Serrote", "Martelo", "Chave de Fenda", "Furadeira"]

console.log(listaPecas)

if (listaPecas.length < 10) {
    console.log('É possível cadastrar mais peças.')
} else {
    console.log('ATENÇÃO! Espaço excedido!!!')
    }

var peso = 100

if (peso >= 100) {
    console.log('Peso da peça adequeado.')
} 
    else {
        console.log('Peso insuficiente...')
    }

let nomePeca = 'Parafusadeira'

switch (nomePeca.length) {
    case 0:
        console.log('Nome vazio! Verifique.')
        break;

    case 1:
    case 2:
    case 3:
        console.log('O nome deve possuir mais de 3 caracteres.')
        break;

    default:
        console.log('Nome adequado.')
        break;
}