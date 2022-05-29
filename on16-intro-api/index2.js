// exemplo de uma variavel string
var name = "Nilva"

// exemplo de uma variavel com funcao
const soma = (a, b) => {
    return console.log(a + b)
}

//sintaxe de exportação, observe que logo apos a primeira variavel acrescentou uma virgula para inserir a funcao
module.exports = {
    name,
    soma
}