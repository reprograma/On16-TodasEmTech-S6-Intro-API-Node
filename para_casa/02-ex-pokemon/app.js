const data = require("./script")
for (let index = 0; index < data.length; index++) {
    let pokemon = data[index]
    console.log("-------------------------------------------------------")
    console.log("Pokemon n." + (index + 1))
    console.log("Nome do Pokemon: " + pokemon.nome)
    console.log("Descrição: " + pokemon.description)

    for (let index = 0; index < pokemon.types.length; index++) {
        const tipo = pokemon.types[index];
        console.log("Tipo: " + tipo)
    }


}